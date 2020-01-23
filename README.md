# TVLAND App

Thank you for taking the time to review my submission to this coding challenge.

Below are few notes on my solution

## The Folder Structure

### actions and reducers

Actions and reducers that are needed for state management with redux.

### assets

Assets such as images, icons etc.

### components

All components that are presentational.

### containers

All components that contain the business logic of the application.

### pages

All components that represent a React Route are stored here.

## Next Tasks

Below are some notes on improvements I already noticed while cross-broweser-testing the application.

- I tried to catch some obvious errors, but I am pretty sure that there are some more when chosing a different show than 'The Powerpuff Girls'. So an important next step would be adding additional tests.
- Add better css browser fallback. So far I only added a polyfill to support IE11, but there should also be a better CSS replacement for the used CSS grid. By default it will just display the mobile version.
- Improve responsiveness of the app. For this challenge I only focused on showing some basic breakpoints in the app. I didn't optimize is for all screen sizes such as 320px wide ones.
- I added some routes to include a home screens with different tv shows. While developing the app I changed my planned design a little bit to include a dropdown filter function. This resulted in an identical design of the episode list in both EpisodePage and ShowPage and therefore some duplicate code. So in a next step I would refactor that code and maybe add a new component and/or change the routing a bit.

Thanks again for your time,
Katharina

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
