import React from "react";


export default function Techidashboard() {
    const [techiDashData, setTechiDashData] = React.useState(
        {

            ticket: "",
            isTicketResolve: false

        }
    )
    function handleChange() {
        function handleChange(event) {
            setTechiDashData(prevFormData => {
                const { name, value, type, checked } = event.target
                return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            }

            )
        }
    }
    function handleSubmit() {

    }

    return (
        <div className="form-container">
            <form className="form">
                <h3>Tech Support Dashboard</h3>
                <textarea
                    rows={5} cols={40}
                    value={techiDashData.ticket}
                    name="ticket"
                    onChange={handleChange}
                    placeholder=" Answer the questions"></textarea><br /><br />

                <input
                    type="checkbox"
                    id="resolveTicket"
                    checked={techiDashData.resolveTicket}
                    onChange={handleChange}
                    name="resolveTicket" />
                <label htmlFor="resolveTicket">Resolve the Ticket</label><br /><br />


                <button className="form--button">Submit</button>
            </form>

        </div>
    )
}