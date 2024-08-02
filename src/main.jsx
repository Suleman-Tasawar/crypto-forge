import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CryptoContextProvider from './context/CryptoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoContextProvider>
      <App classname="m-0 p-0 w-full h-dvh" />
    </CryptoContextProvider>
  </React.StrictMode>,
)
