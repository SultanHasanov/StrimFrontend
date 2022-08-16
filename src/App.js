import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import HeaderMain from "./components/HeaderMain/HeaderMain";
import MainContent from "./components/MainContent/MainContent";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import Footer from "./components/Footer/Footer";
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.user.token)

  if (!token || token === 'Неверный пароль' || token === 'Неверный логин' || token === 'Неверный логин или пароль') {
    return (
      <div className="App">
        <Header />
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/auth" element={<SignIn />} />
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
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
