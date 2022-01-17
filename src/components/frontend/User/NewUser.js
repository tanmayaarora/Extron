import '../../../sass/_loginStyles.scss'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { createUser } from '../UserAction'
import * as Yup from "yup";
import bcrypt from 'bcryptjs';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignUpSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is Required"),
        confirmpwd: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match")
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: '',
            password: '',
            confirmpwd: ''

        },
        validationSchema: SignUpSchema,
        onSubmit: ({ username, password }) => {
            console.log("On Submit called.... Username is ",username);
            dispatch(createUser({ username:username, password:bcrypt.hashSync(password,10) }))
            navigate("/");
        }
    });

    return (
        <>
        <Header/>
        <form onSubmit={formik.handleSubmit}>
            <h3>New user registration</h3>
            <div style={{'paddingTop': '1rem'}}>
                <label>Username</label>
                <input type="text" id="username" name='username' placeholder="Enter username"
                value={formik.values.username} onChange={formik.handleChange} required={true}/>
            </div>
            {formik.errors.username && formik.touched.username ? (
                    <div>{formik.errors.username}</div>
                ) : null}
            <div>
                <label>Password</label>
                <input type="password" id="password" name="password" placeholder="Enter password"
                value={formik.values.password} onChange={formik.handleChange} required={true}/>
            </div>
            {formik.errors.password && formik.touched.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmpwd" id="confirmpwd" placeholder="Enter confirm password"
                value={formik.values.confirmpwd} onChange={formik.handleChange} required={true}/>
            </div>
            {formik.errors.confirmpwd && formik.touched.confirmpwd ? (
                    <div>{formik.errors.confirmpwd}</div>
                ) : null}
            <button type='submit'>REGISTER</button>
            <div>
                <a href="/login">Already registered?</a>
            </div>
        </form>
        <Footer/>
        </>
    );
}
