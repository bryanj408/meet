import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false: true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });

    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
      }
      });
      }
    }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
        ? events 
        : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(',').shift()
      return { city, number };
    })
    return data;
  };


  render() {
    const { locations, numberOfEvents, events } = this.state;
    if (this.state.showWelcomeScreen === undefined) return <div className='App' />
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch updateEvents={this.updateEvents} locations={locations} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
        />       
        <div className="data-vis-wrapper" >
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10, }} >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
      </div>
        <EventList events={this.state.events} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}

export default App;
