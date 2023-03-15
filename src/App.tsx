import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Siidebar'

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import FAQ from './pages/FAQ';
import { SidebarData } from './components/SidebarData';


const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          {
            SidebarData.map((item) => {
              return (
                <Route path={item.path} element={item.component} />
              )
            })
          }
        </Routes>
      </Router> 
    </>
  )
}

export default App
