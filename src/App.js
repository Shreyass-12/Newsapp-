import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=15
  const apiKey = process.env.REACT_APP_NEWS_API
  const[progress,setProgress]=useState(0)
//   state = {
//  progress:0
//   }
 

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
          <Routes>
            <Route path="/business" element={ <News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={pageSize} country="in" category="Business"/>}></Route>
            <Route path="/entertainment"element={<News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />}></Route>
            <Route path="/general"element={<News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="in" category="General" />}></Route>
            <Route path="/health"element={<News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={pageSize} country="in" category="Health" />}></Route>
            <Route path="/science"element={<News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={pageSize} country="in" category="Science" />}></Route>
            <Route path="/sports"element={<News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={pageSize} country="in" category="Sports" />}></Route>
            <Route path="/technology"element={<News setProgress={setProgress} apiKey={apiKey}  key="Technology" pageSize={pageSize} country="in" category="Technology" />}></Route>
            </Routes>
        </Router>
      </div>
    )
  
}
export default App;

