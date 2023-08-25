import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import List from "./components/List";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="Home" element={<Home />}></Route>
          <Route path="Blogs" element={<Blogs />} />
          <Route path="List" element={<List />} />
          <Route path="Login" element={<Login />} />
          <Route path="About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
