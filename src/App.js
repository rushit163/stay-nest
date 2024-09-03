import './App.css';
import Hotels from './pages/homepage/hotels';
import Login from './pages/loginPage/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUPForm from './pages/signuppage/signup';
import User from './pages/userPage/user';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<SignUPForm/>}/>
          <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
