import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import HeaderMain from './components/HeaderMain/HeaderMain';
import MainContent from './components/MainContent/MainContent';
import SignUp from './pages/signUp/SignUp';
import SignIn from './pages/signIn/SignIn';
import Footer from './components/Footer/Footer';
import MyTeam from './pages/my-team/MyTeam';




function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMain />
      <Routes>
        <Route path='/' element={<MainContent />}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/auth' element={<SignIn />}/>
        <Route path='/my-team' element={<MyTeam />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
