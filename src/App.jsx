import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./routes/Home";
import CoinsDetail from "./routes/CoinsDetail";
import Account from "./routes/Account";
import NotFound from "./routes/NotFound";
import Coins from "./routes/Coins";
import RegistrationContextProvider from "./context/RegistrationContext";
import AuthContextProvider from "./context/AuthContext.jsx";
import LoginMenu from "./routes/LoginMenu";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 from-30% to-gray-900 h-dvh font-mono">
        <BrowserRouter>
          <Navbar />
          <RegistrationContextProvider>
            <AuthContextProvider>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="coins" element={<Coins />}></Route>
                <Route path="coinsdetail/:id" element={<CoinsDetail />}></Route>
                <Route element={<RestrictedRoute />}>
                  <Route path="account" element={<Account />}></Route>
                </Route>
                <Route path="LoginMenu/:type" element={<LoginMenu />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </AuthContextProvider>
          </RegistrationContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
