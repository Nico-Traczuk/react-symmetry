import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { Hero } from './Hero.jsx'
import { AboutUs } from './AboutUs.jsx'
import { Services } from './Services.jsx'
import { Form } from './Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hero/>
    <AboutUs/>
    <Services/>
    <Form/>
  </React.StrictMode>,
)
