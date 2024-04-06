import React from "react";
//import { AxiosContext } from 'axios'



export default function Dashboard() {
    const [userDashData, setUserDashData] = React.useState(
        {
            name: "",
            ticket: "",
            isTicketResolve: false

        }
    )
    function handleChange() {

    }
    function handleSubmit() {

    }
    /*function ImageUpload() {

        function handleImage(e) {
            console.log(e.target.files)
            setImage(e.target.files[0])
        }

    }
    function handleApi() {
        const formData = new FormData()
        formData.append('image', image)
        axios.post('url', formData).then((res) => {
            console.log(res)
        })
    }*/

    return (
        <div className="form-container">
            <form className="form">
                <h3>User Dashboard</h3>
                <textarea
                    rows={5} cols={40}
                    value={userDashData.ticket}
                    name="ticket"
                    onChange={handleChange}
                    placeholder=" Ask questions"></textarea><br /><br />

                <input type="file" name="file"></input>
                <button >Choose File</button>

                <input
                    type="checkbox"
                    id="resolveTicket"
                    checked={userDashData.resolveTicket}
                    onChange={handleChange}
                    name="resolveTicket" />
                <label htmlFor="resolveTicket">Is your Query Resolve?</label><br /><br />


                <button className="form--button">Submit</button>
            </form>

        </div>
    )
}