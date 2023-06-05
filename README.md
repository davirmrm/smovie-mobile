# React Native Project Structure

Search movies, series, games. so that you can find out more information about

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.

## Usage
You can start by cloning this repository and using (`git clone https://github.com/davirmrm/smovie-mobile.git`) .

After that you should proceed as in any javascript project:

- Go to the root folder of your project and run `npm install`.
- If you are using Xcode 12.5 or higher, go to /ios and run `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to launch your app!

- npx react-native run-android

(Using yarn: `yarn ios` or `yarn android`)

## Folder structure

This template follows a very simple project structure:
- `assets`: Asset folder to store all images, vectors, fonts, etc.
- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common component that you use through your app
  - `constants`: Folder to store any kind of constant that you have.
  - `routes`: Folder to store the navigators.
  - `redux`: This folder should call all your reducers
  - `views`: Folder that contains all your application screens/features.
    - `nls`: nls is the folder where we have the possible internationalizations.
    - `redux`: contains the redux and actions of this screens module.
  - `helper`: Common api controller.
  - `utils`: Folder to store any common function such as calcutate radius, different date formatting functions
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

Modify the environment variables files in root folder (`.env`)

## Components

Components are the basic blocks of a react native application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too.

### API connection handler

To keep the networking layer simple, the template uses a single Axios instance in the `api.js`. It uses interceptors to define common side effects for the responses.

## Views

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each module you have in your app, call all the static components and resources needed to render the scene, and finally use the corresponding hooks to interact with redux and actions, and create behaviors depending on the store.