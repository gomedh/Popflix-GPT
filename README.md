# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Project Setup/Configuration

- npx create-react-app project-name
    - Setup Tailwind
        -  Refer to the tailwind Doc for create-react-app
    - Setup React-Router-DOM as Dev Dependency
    

### Project Plan/Features 
- Sign-In/Login-In Page
    - Forms
        - Redirect to Browse Page
        - Sign Up form
- Browse Page (After Authentication)
    - Header
        - Main Movie
            - Trailer in BG
            - Movie Title and Description
            - Movie Suggestion
                - N number- Movie Cars suggestions
                - horizontal scrolling support
- Netflix GPT
    - Search Bar
    - Movie Suggestions
- Fetch Movie data from TMDB Movies
- Multi-language support

### Project Feature Completions
- Created the app
- Configured Tailwindcss
- Header component with logo
- Routing of the app
- Sign in and Sign up Form in place
- Form Validation
    - UseRef Hook
- FireBase Setup
- Hosting the application on Firebase
- Authenticaiton
- Login-In-Sign-up inplace using firebase
- COnfigured redux store & userslice
- Implemented Sign-out feature
- Added photo and name
- Update profile and app redirection
- If user is not logged inredirect to login page andvvice-versa
- unsubscribe when the component is unmounted for onAuthStaeChanged callback
- Registered for TMDB Movies API and create an app
- Get the access token and movie list api to get the movies list
- Consume the access token and movie list api to get the movies list in browse page
- Custome hook for now playing movie
- Created a movie slice
- Updated store with the data
- Planning for the main and secondary container
- Created components for these and fetch data for trailer video
- Updated the store with trailer video data
- Fixed the CSS after embedding the youtube video and make it autoplay with mute audio
- Filled Secondary container with movies list
- IMG CDN thing in place for TMDB
- Created a custom hook for upcooming and top rated movvies and consumed them
- GPT Search feature
- Multi-language support
- Integrate GPT APIs



