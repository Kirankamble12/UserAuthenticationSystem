import React from "react";
import { Link } from "react-router-dom";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import { useNavigate } from 'react-router-dom'



export default function Login() {

    const navigate = useNavigate()
    const [loginFormData, setLoginFormData] = React.useState(
        {
            userType: "",
            email: "",
            password: ""
        }
    )
    console.log(loginFormData)

    function handleChange(event) {
        setLoginFormData(prevFormData => {
            const { name, value, type, checked } = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }

    function handleSubmit(event) {
        event.preventDefault()

        // if(loginFormData.userType === regFormData.userType && loginFormData.password === regFormData.password){

        //// }
        // else{

        // }

    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <select className="form--input" id='userType'
                    value={loginFormData.userType}
                    onClick={handleChange}
                    name="userType">
                    <option value="user">User</option>
                    <option value="techsupport">Tech Support</option>
                    <option value="admin">Admin</option>
                </select><br /><br />

                <input className="form--input"
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={loginFormData.email}
                    name='email'></input>
                <br /><br />

                <input className="form--input"
                    type='password'
                    placeholder='Enter Password'
                    onChange={handleChange}
                    value={loginFormData.password}
                    name='password'></input>
                <br /><br />


                <button className="form--button" onClick={() => navigate('Dashboard')} >Submit</button><br /><br />
                <Link to="Registration" className="link">Register</Link>



            </form>

        </div>


    );
}