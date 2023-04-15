import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='login' element={ <SignIn /> } />
        <Route path="register" element={ <Register /> } />
      </Routes>
    </>
  );
}

export default App;