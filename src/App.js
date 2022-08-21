import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderMain from "./components/HeaderMain/HeaderMain";
import MainContent from "./components/MainContent/MainContent";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import MyTeam from "./pages/my-team/MyTeam";
import MainProducts from "./pages/MainProducts/MainProducts";
import CartPage from "./pages/Cart/CartPage";
import AllProducts from "./pages/MainProducts/Categories/AllProducts";
import CabinetPage from "./pages/Cabinet/CabinetPage";
import CabinetChange from "./pages/Cabinet/CabinetChange";
import BuyPage from "./pages/Buy/BuyPage";

function App() {
  const token = useSelector((state) => state.user.token);
  const product = useSelector((state) => state.products.products);

  if (
    !token ||
    token === "Неверный пароль" ||
    token === "Неверный логин" ||
    token === "Неверный логин или пароль"
  ) {
    return (
      <div className="App">
        <Header />
        <HeaderMain />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/auth" element={<SignIn />} />
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/products" element={<MainProducts />} />
          <Route path="/cart" element={<Navigate to="/register" />}></Route>
          <Route path="/all-tovars" element={<AllProducts />} />
          <Route path="/cabinet" element={<Navigate to="/register" />}></Route>
          <Route path="/cabinetchange" element={<Navigate to="/register" />}></Route>
          <Route path="/buy" element={<Navigate to="/register" />}></Route>
          <Route path="/favorite" element={<Navigate to="/register" />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <HeaderMain />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/register" element={<Navigate to="/" />} />
        <Route path="/auth" element={<Navigate to="/" />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/products" element={<MainProducts />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/all-tovars" element={<AllProducts />} />
        <Route path="/cabinet" element={<CabinetPage />}></Route>
        <Route path="/cabinetchange" element={<CabinetChange />}></Route>
        <Route path="/buy" element={<BuyPage />}></Route>
        <Route path="/favorite" element={<BuyPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
