import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './assets/index.css'
import { Settings } from './components/pages/settings'
import { NavBar } from './components'

// Render the app
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  </Router>
)
