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
      <Router basename='/NewsAPI'>
          <NavBar />

          <LoadingBar
        color='#f11946'
        progress={progress}
      />
       
        <Routes>
          <Route exact path="/NewsAPI" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={page}   key="general"  country="in" category="general"/>}></Route> 
          <Route  path="/business" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={page}   key="business"  country="in" category="business"/>}></Route> 
          <Route  path="/entertainment" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={page}   key="entertainment"  country="in" category="entertainment"/>}></Route> 
          <Route  path="/general" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={page}   key="general"  country="in" category="general"/>}></Route> 
          <Route  path="/health" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={page}   key="health"  country="in" category="health"/>}></Route> 
          <Route  path="/science" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={page}   key="science"  country="in" category="science"/>}></Route> 
          <Route  path="/sports" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={page}  key="sports"  country="in" category="sports"/>}></Route> 
          <Route  path="/technology" element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={page}   key="technology"  country="in" category="technology"/>}></Route> 
        </Routes>
      
        </Router>
      </>



    )
  }

  export default App
