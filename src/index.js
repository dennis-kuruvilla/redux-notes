import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux' //redux package 
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux' //react-redux package
import App from './App'
import store from './store'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'


//creating a combined reducer
// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })


// const store = createStore(
//   reducer,
//   composeWithDevTools()
  //) //creating store. Store has to be made in index.js itself in order for the useDispatch() to work
//ENTIRE STORE CREATION CODE HAS BEEN MOVED TO store.js

ReactDOM.render(

  // the application is now defined as a child of a Provider component provided by 
  //the react redux library. The application's store is given to the Provider as its 
  //attribute store.

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)