import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Project from "./Components/Project";
import React from "react";
import About from "./Components/About";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
