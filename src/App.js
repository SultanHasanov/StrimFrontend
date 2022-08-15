import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import HeaderMain from './components/HeaderMain/HeaderMain';



function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMain />
    </div>
  );
}

export default App;
