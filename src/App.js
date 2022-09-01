// eslint-disable-next-line
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Todo from './component/Todo'

const App = () => {
  return (
    <div className='Header'>
      <Navbar />
        <div className='App text-center'>
            <Todo />
        </div>
    </div>
  )
}

export default App;
