// import logo from './logo.svg';
import './App.css';
//Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";
import Doctor from "./Pages/Doctor/Doctor";
import Dashboard from './Pages/UserDashboard/Dashboard';
import Register from './Pages/UserDashboard/Register';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/doctor" element={<Doctor />} />
          <Route exact path="/userdashboard" element={<Register />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
