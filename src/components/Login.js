import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Login() {
    const navigate = useNavigate();

    function validate(){
        if(username==="demo" && password==="demo"){
            alert("Login successful!");
            navigate("/");
        }
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <Header/>
        <form>
            <div>
                <label>Username</label>
                <input type="text" placeholder="Enter username"
                onChange={e=>setUsername(e.target.value)} required={true}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter password"
                onChange={e=>setPassword(e.target.value)} required={true}/>
            </div>
            <button onClick={validate}>Submit</button>
        </form>
        <Footer/>
        </>
    );
}