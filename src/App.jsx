import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useContext } from "react"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import CoinsDetail from "./routes/CoinsDetail"
import Account from "./routes/Account"
import NotFound from "./routes/NotFound"
import News from "./components/News"
import Coins from "./routes/Coins"
import { getGeneralData, getHistoricalData, getNewsData } from "./utils/api"
import { CryptoContext } from "./context/CryptoContext"

function App() {

  const {news, setNews} = useContext(CryptoContext)

  // useEffect(() => {
  //   getNewsData(setNews)
  // }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/coins" element={<Coins/>}></Route>
          <Route path="/coinsdetail:id" element={<CoinsDetail/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
