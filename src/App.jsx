import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
