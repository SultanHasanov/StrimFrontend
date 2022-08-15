import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import HeaderMain from './components/HeaderMain/HeaderMain';
import MainContent from './components/MainContent/MainContent';



function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMain />
      <MainContent />
    </div>
  );
}

export default App;
