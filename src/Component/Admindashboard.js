import React from "react";


export default function Admindashboard() {
    const [adminDashData, setAdminDashData] = React.useState(
        {
            techiName: "",
            ticket: "",
            closeTicket: false


        }
    )

    function handleChange(event) {
        setAdminDashData(prevFormData => {
            const { name, value, type, checked } = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        }

        )
    }
    function handleSubmit() {

    }

    return (
        <div className="form-container">

            <form className="form">
                <h3>Admin Dashboard</h3>
                <input className="form--input"
                    type='text'
                    placeholder='Enter Techi Name'
                    onChange={handleChange}
                    value={adminDashData.techiName}
                    name='techiName' /><br /><br />
                <textarea

                    rows={5} cols={40}
                    value={adminDashData.query}
                    name="ticket"
                    onChange={handleChange}
                    placeholder="Resovle Ticket"></textarea><br /><br />

                <input

                    type="checkbox"
                    id="Ticket"
                    checked={adminDashData.resolveTicket}
                    onChange={handleChange}
                    name="closeTicket" />
                <label htmlFor="closeTicket">Close the Ticket</label><br /><br />

                <button className="form--button">Submit</button>
            </form>


        </div >
    )
}