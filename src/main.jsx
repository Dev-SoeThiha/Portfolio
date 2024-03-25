import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Analytics from './components/Analytics.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
    <App />
  </React.StrictMode>,
)
