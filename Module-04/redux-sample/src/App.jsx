import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToList, addToState, removeToState } from './redux/actions/action'
import Result from './Result'

const App = () => {


  const dispatch = useDispatch()
  const {counter} = useSelector(state => state)
  console.log(counter);
  return (
    <>
      <button onClick={() => { dispatch(removeToState()) }}>Decrement</button>
      <button>{counter}</button>
      <button onClick={() => { dispatch(addToState()) }}>Increment</button>



      <button onClick={() => { dispatch(addToList(counter)) }}>ADD To List</button>


      <Result />

    </>
  )
}

export default App