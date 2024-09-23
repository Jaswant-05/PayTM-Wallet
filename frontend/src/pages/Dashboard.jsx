import { useSearchParams } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"
import axios from "axios"

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setBalance(response.data.balance);
            } catch (err) {
                console.error("Error fetching balance:", err); 
                setError("Failed to fetch balance");
            }
        };
    
        fetchBalance();
    }, []);
    

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    );
}