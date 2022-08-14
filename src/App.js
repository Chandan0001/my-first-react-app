import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Company- Dark Mode';
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      // document.title = 'Company- Light Mode';
    }
  }
  return (
    <>
    <Router>
   <Navbar title="Company name" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route path="/about" element= { <About mode={mode}/>}>
           
          </Route> 
            <Route path="/" element= { <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
          
          </Route> 
    </Routes>
   </div>
   
    </Router>
    </>
  );
}

export default App;



//   // "homepage": "https://Chandan0001.github.io/my-first-react-app",
// JSON top line