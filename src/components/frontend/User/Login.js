import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {loginUser} from '../UserAction'
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../../../sass/_loginStyles.scss'

export default function Login() {
    const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

    const UserSchema = Yup.object().shape({
        username: Yup.string().required("Username is Required"),
        password: Yup.string().required("Password is Required"),
    });
	const onSuccess = () => {
		console.log("Location is ",location);
		if(location.pathname==="/login"){
			navigate("/");
		}
		else{
			navigate(location.pathname);
		}
	}
    const onFailure = () => {
		Swal.fire({
			icon:'error',
			title:'Oops...',
			text:'Incorrect username or Password'
		})
	}
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {

            username: '',
            password: '',

        },
        validationSchema: UserSchema,
        onSubmit: ({ username, password }) => {
			console.log("Username is",username);
			console.log("Password is",password);
			dispatch(loginUser({username,password},onSuccess,onFailure));
        }
    });

    return (
        <>
        <Header/>
        <form onSubmit={formik.handleSubmit}>
            <h3>Existing user Login</h3>
            <div style={{'paddingTop': '1rem'}}>
                <label>Username</label>
                <input type="text" name="username" id="username"
                placeholder="Enter username" value={formik.values.username}
                onChange={formik.handleChange} required={true}/>
            </div>
            {formik.errors.username && formik.touched.username ? (
				<div>{formik.errors.username}</div>
			) : null}
            <div>
                <label>Password</label>
                <input type="password" name="password" id="password"
                placeholder="Enter password" value={formik.values.password}
                onChange={formik.handleChange} required={true}/>
            </div>
            {formik.errors.password && formik.touched.password ? (
				<div>{formik.errors.password}</div>
			) : null}
            <button type="submit">LOGIN</button>
            <div>
                <a href="/reset">Forgot password?</a>
                <a href="/register">New user?</a>
            </div>
        </form>
        <Footer/>
        </>
    );
}
