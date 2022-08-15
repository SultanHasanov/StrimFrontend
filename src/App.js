import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import HeaderMain from './components/HeaderMain/HeaderMain';
import SignUp from './pages/signUp/SignUp';
import SignIn from './pages/signIn/SignIn';



function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMain />
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/auth' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;
