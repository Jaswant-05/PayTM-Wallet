import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { useState } from "react";
import Hero from "./pages/Hero";

function App() {
  const [userId, setUserId] = useState('');
  const [firstName, setFirstName] = useState('');

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin setUserId={setUserId} userId={userId} firstName={firstName} setFirstName={setFirstName}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
