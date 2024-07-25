import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useContext } from "react"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import CoinsDetail from "./routes/CoinsDetail"
import Account from "./routes/Account"
import NotFound from "./routes/NotFound"
import Coins from "./routes/Coins"
import { getGeneralData, getHistoricalData, getNewsData } from "./utils/api"
import { CryptoContext } from "./context/CryptoContext"
import RegistrationContextProvider from "./context/RegistrationContext"
import LoginMenu from "./routes/LoginMenu"

function App() {

  const {setData, setNews} = useContext(CryptoContext)

  useEffect(() => {
    getGeneralData(setData)
    getNewsData(setNews)
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <RegistrationContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/coins" element={<Coins/>}></Route>
            <Route path="/coinsdetail:id" element={<CoinsDetail/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/LoginMenu/:type" element={<LoginMenu/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
          </Routes>
        </RegistrationContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
