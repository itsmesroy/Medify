import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  
import Navbar from './components/NavBar/NavBar';  

function App() {
  return (
    <Router> 
      <div className="App">
      <Navbar atHomePage={true}/>
      </div>
    </Router>
  );
}

export default App;
