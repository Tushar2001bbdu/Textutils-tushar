import logo from './logo.svg';
import './Appa.css';
import Navbar from './components/Navbar';
import About from './components/About.js';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const[mode,SetMode]=useState("light")
  const[modeB,bluedarkMode]=useState("light")
  const[modeG,greendarkMode]=useState("light")
  const[alert,setAlert]=useState(null)
  const showAlert =(msg,type) =>{setAlert({
    message:msg,
    type:type
  });
  setTimeout(()=>{setAlert(null)},2000)

  };
  const toggleMode=()=>{
    if(mode === 'light'){
      SetMode("dark")
      document.body.style.backgroundColor="grey"
      document.body.style.Color="white"
      showAlert("light mode has been enabled","success")
    }
    else{
      SetMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.Color="black"
      showAlert("dark mode has been enabled","success")
    }
  }
  return (
    <BrowserRouter>  
  <div>
  <Navbar title="TextUtils2" mode={mode}toggleMode={toggleMode}/><Alert alert={alert} />
  <div className="container"></div>
  <Routes>
  <Route path="about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="This is my textUtils Website" />} />
  </Routes>
      
</div>
</BrowserRouter>

  )
}

export default App;
