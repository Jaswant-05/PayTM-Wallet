import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export default function Navbar() {
    const navigate = useNavigate();

    return (
      <nav className="shadow h-18 flex justify-between items-center w-screen p-4">
        <h1 className="text-2xl font-bold">PayTM</h1>
        <div className="flex h-full items-center">
            <Button label={"LogIn"} onClick={() =>{
                navigate('/signin')
            }}/>
            <Button label={"SignUp"} onClick={() =>{
                navigate('/signup')
            }}/>
        </div>
      </nav>
    );
  }
  