import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './components/Test'
import MainLayout from './components/MainLayout';
import HomePage from './components/mainPage/HomePage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/main-layout" element={<MainLayout/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
