import React from 'react'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'

export default function Registration() {
    const [regFormData, setRegFormData] = React.useState(
        {
            userType: "",
            name: "",
            email: "",
            password: "",
            conpassword: "",
            keepSigned: true
        }
    )

    console.log(regFormData)
    function handleChange(event) {
        setRegFormData(prevFormData => {
            const { name, value, type, checked } = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()

        if (regFormData.password === regFormData.conpassword) {
            console.log("Successfully signed up!..");
        }
        else {
            console.log("Password do not match!..");
        }
    }


    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <select className='form--input' id='userType'
                    value={regFormData.userType}
                    onClick={handleChange}
                    name="userType">
                    <option value="user">User</option>
                    <option value="techsupport">Tech Support</option>
                    <option value="admin">Admin</option>
                </select><br /><br />

                <input className="form--input"
                    type='text'
                    placeholder='Enter Name'
                    onChange={handleChange}
                    value={regFormData.name}
                    name='name'></input><br /><br />

                <input className="form--input"
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={regFormData.email}
                    name='email'></input>
                <br /><br />

                <input className="form--input"
                    type='password'
                    placeholder='Enter Password'
                    onChange={handleChange}
                    value={regFormData.password}
                    name='password'></input>
                <br /><br />

                <input
                    className="form--input" type='password'
                    placeholder='Confirm Password'
                    onChange={handleChange}
                    value={regFormData.conpassword}
                    name='conpassword'></input>
                <br /><br />

                <input type='checkbox'
                    id='keepSigned'
                    checked={regFormData.keepSigned}
                    onChange={handleChange}
                    name="keepSigned"></input>
                <label htmlFor="check">Keep me signed in</label><br /><br />
                <button className='form--button'><Link to="Dashboard">Submit</Link></button>
            </form>

        </div>
    )
}