import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux"
import { combineReducers, createStore } from 'redux'
import { CounterReducer } from './redux/reducers/reducer'
import { ListReducer } from './redux/reducers/list.reducer'

const reducers = combineReducers({
  counter: CounterReducer,
  list: ListReducer
})

const GlobalStore = createStore(
  reducers
)

console.log(GlobalStore);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={GlobalStore}>
    <App />
  </Provider>
  ,
)
