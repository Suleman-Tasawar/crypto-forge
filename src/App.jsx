import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useContext } from "react"
import { getGeneralData, getHistoricalData, getNewsData } from "./utils/api"
import { CryptoContext } from "./context/CryptoContext"
import { CircularProgress } from "@mui/material"
import Navbar from "./components/Navbar"

import Navbar from "./components/NavBar"

import Home from "./routes/Home"
import CoinsDetail from "./routes/CoinsDetail"
import Account from "./routes/Account"
import NotFound from "./routes/NotFound"
import Coins from "./routes/Coins"
import RegistrationContextProvider from "./context/RegistrationContext"
import LoginMenu from "./routes/LoginMenu"
import RestrictedRoute from "./components/RestrictedRoute"

function App() {

  return (<>
      {

        loading ?
        <CircularProgress /> : 
        <div className="bg-gradient-to-b from-gray-800 from-30% to-gray-900 h-dvh font-mono">

        <div className="bg-gradient-to-b from-gray-800 from-30% to-gray-900 h-dvh">
        <BrowserRouter>
          <Navbar/>
          <RegistrationContextProvider>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="coins" element={<Coins/>}></Route>
              <Route path="coinsdetail/:id" element={<CoinsDetail/>}></Route>
              <Route element = {<RestrictedRoute/>}>
              <Route path="account" element={<Account/>}></Route>
              </Route>
              <Route path="LoginMenu/:type" element={<LoginMenu/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </RegistrationContextProvider>
        </BrowserRouter>
        </div>
    }
    </>
  )
}

export default App
