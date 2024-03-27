import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './component/ScrollToTop.jsx'
import "react-image-lightbox/style.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
)
