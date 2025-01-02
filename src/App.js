// Imports
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import Projects from "./components/projects/projects.jsx";
import Loading from "./components/an-loading/loading.jsx";

// Animation



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Loading/>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
