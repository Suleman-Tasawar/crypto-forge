import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Coins from "./routes/Coins"
import Account from "./routes/Account"
import NotFound from "./routes/NotFound"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/coins:id" element={<Coins/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
