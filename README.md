# meet

Objective
To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events

"Given-When-Then" key features and user stories


FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS ---------
Scenario 1: An event element is collapsed by default
As a user, I should be able to navigate the site with ease so that it's easy to use.
GIVEN that the user wants to select details on an event, WHEN they click on that button, THEN it should expand for more details.

Scenario 2: User can expand an event to see its details
As a user, I should be able to click on a button so that I can see more details on that thing.
GIVEN that the user has selected the city, WHEN they go to click the button, THEN it will expand for them.

Scenario 3: User can collapse an event to hide its details
As a user, I should be able to collapse the details button so that I don't have to view it anymore.
GIVEN that the user is done with the details, WHEN they go to click on the 'collapse' button, THEN the button should close. 

FEATURE 3: SPECIFY NUMBER OF EVENTS ---------
Scenario 1: When user hasn’t specified a number, 32 is the default number
As a user, I should be able to be guided by the app, so that I can know where to start.
GIVEN that the user has picked the city, WHEN the events load, THEN 32 events will show by default.

Scenario 2: User can change the number of events they want to see
As a user, I should be able to change the amount of events I see so that I can narrow it down.
GIVEN the user knows what kind of event they want, WHEN the list is loaded, THEN they can narrow it down. 

FEATURE 4: USE THE APP WHEN OFFLINE ---------
Scenario 1: Show cached data when there’s no internet connection
As a user, I should be able to use the app offline so that I can have access anywhere.
GIVEN the user will not always have access to the internet, WHEN the user is away from home, THEN they can access the app.

Scenario 2: Show error when user changes the settings (city, time range)
As a user, I should be able to know when I've changes my location so that I am able to accurately reflect what I need.
GIVEN the user might make a mistake, WHEN they accidently change (city, time range), THEN they will be notified.
