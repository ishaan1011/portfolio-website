import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/" element={
            <Navbar>
              <Home />
              <Projects />
              <Experience />
              <About />
              <Contact />
            </Navbar>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
