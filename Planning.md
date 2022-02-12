# Instructions 
- Instructions FE-Mentors (Work from design)
    - See all countries from the API on the homepage
    - Search for a country using an `input` field
    - Filter countries by region
    - Click on a country to see more detailed information on a separate page
    - Click through to the border countries on the detail page
    - Toggle the color scheme between light and dark mode *(optional)*

## Considerations 
- The SSL cert on the endpoint has expired 

## React Components 
- 1. Switch
    - The <Switch /> component will only render the first route that matches/includes the path. Once it finds the first route that matches the path, it will not look for any other matches. Not only that, it allows for nested routes to work properly, which is something that <Router /> will not be able to handle. ReactDOM.
    - (https://dev.to/danhjoo7/using-a-switch-component-in-react-router-d2k)
- 2. Route
    - The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when its path matches the current URL. The “react-empty” comments are just implementation details of React's null rendering.
    - Routes needed 
        - 1. http://localhost:3000/
            - Homepage
        - 2. http://localhost:3000/country/:countryId
            - ShowCountryDetails 
                - Here you will use the <Link /> comp to navigate back 
                    - Two scenarios
                        - 1. Back button from ShowDetails to Homepage 
                        - 2. Back button from Neighbour countries to prev 
- 3. Link
    - Works like a tag but prevents refresh 

## Custom Components
- 0. App.js
    - Will hold Hook described below 
    - 1. Nav
        - Text
            - Where in the world? 
            - Dark mode + icon
                - Will have light dark functionality (JS)
                    - Local storage 
                    - create css variables 
                    - Refer back to your portfolio project 
    - 2. Homepage
        - `Note`
            - Default 
                - Will show all countries aplhabetically 
            - `Later feature`
                - Truncate to maybe max of say 15 or 20
        - Child components 
            - 1. SearchBar
                - Will have to implement debounce function to throttle API requests
                    - Request will be in services folder 
                    - See stephen YT tutorial or look into lodash. 
                        - works with set timeout 
            - 2. FilterByRegion 
            - 3. CountryCard(s) 
                - Child component(s)
                    - 1. ShowCountryDetails
                        - Here you will have the buttons which lead to the 
                            - neighboring countries 
                            - This will be the <Link /> comp that leads to 
                                - http://localhost:3000/country/:countryId   

## IMPORTANT
- 1. Have an api folder with `getCountries` file that will hold the base url and params 
    - (use axios to make request)
    - export this file 
- 2. Have a hook that will 
    - 1. Have a search function in it to pass down to SearchBar
        - Each time search triggered then useEffect will rerender comp
        - `Search function must be exact match`
            - Research web for best search functions. 
    - 2. Have a filter by region function 
    - 3. Hold the response 
    - 4. Destructure in the primary parent comp
        - Destructure the search function and the response inside 
            - pass search func down search bar comp 
        - Destructure the filter function
            - Pass down to FilterByRegion 
        - The response can now be distributed through the entire chain 
    - 5. useEffect inside hook 
        - Will need to be triggered when 
            - 1. Search term changes 
            - 2.
    - `ALT`
        - 1. The API request will only need to be made once 
            - When the app first loads up 
        - 2. The search and filter function can manipulate the response 
            - No futher requests need to be made and debounce might not be needed. 
        - 3. Still put the search and filter func in the hook 
            - Trigger a rerender when response changes  
        - `Note`
            - Check network time when making request to get all the data you need for 
                - all countries. 
## Stateful Components
- Have App.js hold the Hook 
    - pass helper functions and state down as props

- Nav (Optional)
    - Control State between light and dark mode (Boolean State - on/off switch)

## Data Needed from response 
- 1. Name 
- 2. Population
- 3. Region 
- 4. Capital 
- 5. Country flag img 
- 6. Country Neighbor 

## Controlled Componets 
## Uncontrolled / Display Components 
## Additions (Later - New Branch) 
### Redux / Context
- Implement