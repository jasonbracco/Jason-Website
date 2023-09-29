import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles.css'; // Import your CSS file here
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
