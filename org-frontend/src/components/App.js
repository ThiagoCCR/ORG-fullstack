import GlobalStyle from "../assets/css/GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn.js";
import Home from "../pages/Home/index.js";
import { useState } from "react";
import Signup from "../pages/SignUp/SignUp.js";
import LoadingContext from "../configs/contexts/LoadingContext.js";
import Today from "../pages/Today/Index.js";
import HabitsPage from "../pages/Habits/index.js";
import FinancesPage from "../pages/Finances/index.js";

function App() {
  const [isLoading, setisLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setisLoading }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/finances" element={<FinancesPage />} />
        </Routes>
      </BrowserRouter>
    </LoadingContext.Provider>
  );
}

export default App;
