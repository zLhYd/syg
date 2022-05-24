import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";

import About from "./components/about/About";
import Project from "./components/project/Project";

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
