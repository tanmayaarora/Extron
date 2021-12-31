import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Login.scss'
import './util.scss'

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
        {/* <form>
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
        </form> */}
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title p-b-33">
                            Account Login
                        </span>

					<div class="wrap-input100 validate-input" data-validate = "Username is required">
						<input class="input100" type="text" placeholder="Enter username"
                        onChange={e => setUsername(e.target.value)} required={true}/>
                        <span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					</div>

					<div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
						<input class="input100" type="password" placeholder="Enter password"
                        onChange={e => setPassword(e.target.value)}/>
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					</div>

					<div class="container-login100-form-btn m-t-20">
						<button class="login100-form-btn" onClick={validate}>
							Sign in
						</button>
					</div>

					{/* <div class="text-center p-t-45 p-b-4">
						<span class="txt1">
							Forgot
						</span>

						<a href="#" class="txt2 hov1">
							Username / Password?
						</a>
					</div>

					<div class="text-center">
						<span class="txt1">
							Create an account?
						</span>

						<a href="#" class="txt2 hov1">
							Sign up
						</a>
					</div> */}
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}