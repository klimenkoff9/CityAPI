## City Search app

In this project we will allow the user to provide us a City name and we will display all of the associated zip codes to the user. 

To get started run the following commands

- `create-react-app city-search`
- `cd city-search`
- `npm start`

At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (`city-search`) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at `App.js` and you can also edit `public/index.html` (to add Bootstrap for example).

Using the same API as project 1, we will build a City search app, where given a city name, we will display all returned zip codes.

### Primary Tasks

Using the same ctp-zip-api we used in project 1:

- Implement a City Search field that takes city names
    + it should allow city names to be entered in upper, lower, or mixed case letters
- Display all zip codes received from the API

### Stretch Features (Optional, but highly recommended)

- Display all states where the city was found in the API
- Group received zip codes by state
- Display city details for each Zip code

> Note: these will require additional fetch call to the API. Feel free to use your own CSS styles and to add any additional features you want.
