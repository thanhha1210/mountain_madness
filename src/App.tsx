import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import FirstPuzzle from "./components/puzzles/FirstPuzzle";
import SecondPuzzle from "./components/puzzles/SecondPuzzle";
import ThirdPuzzle from "./components/puzzles/ThirdPuzzle";
import FourthPuzzle from "./components/puzzles/FourthPuzzle";
import BlogPuzzle from "./components/puzzles/BlogPuzzle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/first-puzzle" element={<FirstPuzzle/>}></Route>
        <Route path="/second-puzzle" element={<SecondPuzzle/>}></Route>
        <Route path="/third-puzzle" element={<ThirdPuzzle/>}></Route>
        <Route path="/fourth-puzzle" element={<FourthPuzzle/>}></Route>
        <Route path="/blog-puzzle" element={<BlogPuzzle/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
