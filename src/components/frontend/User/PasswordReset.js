import {useState} from 'react';
import '../../../sass/_loginStyles.scss'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Reset() {

    const validate = (e) => {
        e.preventDefault();
        alert("Working!");
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return (
        <>
        <Header/>
        <form>
            <h3>Reset your password</h3>
            <div style={{'paddingTop': '1rem'}}>
                <label>Username</label>
                <input type="text" placeholder="Enter username"
                onChange={e=>setUsername(e.target.value)} required={true}/>
            </div>
            <div>
                <label>New Password</label>
                <input type="password" placeholder="Enter new password"
                onChange={e=>setPassword(e.target.value)} required={true}/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" placeholder="Enter confirm password"
                onChange={e=>setConfirmPassword(e.target.value)} required={true}/>
            </div>
            <button onClick={validate}>SUBMIT</button>
        </form>
        <Footer/>
        </>
    );
}
