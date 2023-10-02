import './App.css'

import React,{useState} from 'react';
import NavBar from './Components/NavBar'
import News from './Components/News'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {

  const page=6;
  const apiKey ="a2bb26b71dd04bf4a0854104af2008a7"
  const[progress,setProgress]=useState(30)





  
    return (
      <>
      <Router basename = "/NewsAPI">
          <NavBar />

          <LoadingBar
        color='#f11946'
        progress={progress}
      />
       
        <Routes>
          <Route exact path="/NewsAPI" element={<News  setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={page} country="in" category="general"/>}></Route> 
          <Route exact path="/business" element={<News  setProgress={setProgress} apiKey={apiKey}   key="business" pageSize={page} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment" element={<News  setProgress={setProgress} apiKey={apiKey}   key="entertainment" pageSize={page} country="in" category="entertainment"/>}></Route> 
          <Route exact path="/general" element={<News  setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={page} country="in" category="general"/>}></Route> 
          <Route exact path="/health" element={<News  setProgress={setProgress} apiKey={apiKey}   key="health" pageSize={page} country="in" category="health"/>}></Route> 
          <Route exact path="/science" element={<News  setProgress={setProgress} apiKey={apiKey}   key="science" pageSize={page} country="in" category="science"/>}></Route> 
          <Route exact path="/sports" element={<News  setProgress={setProgress} apiKey={apiKey}   key="sports" pageSize={page} country="in" category="sports"/>}></Route> 
          <Route exact path="/technology" element={<News  setProgress={setProgress} apiKey={apiKey}   key="technology" pageSize={page} country="in" category="technology"/>}></Route> 
        </Routes>
      
        </Router>
      </>



    )
  }

  export default App
