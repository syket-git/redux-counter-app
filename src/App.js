import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from './actions';
 
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
