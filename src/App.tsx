import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/puzzles/StartPage";
import Test from './components/Test'
import MainLayout from './components/MainLayout';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/main-layout" element={<MainLayout/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
