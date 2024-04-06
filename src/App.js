import React from "react";
import './index.css';
import {
    BrowserRouter as Router, Routes, Route, Navigate
} from "react-router-dom";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import Dashbord from "./Component/Dashboard";
import Admindashboard from "./Component/Admindashboard";
import Techsupdashboard from "./Component/TechSupdashboard"



export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Login />}></Route >
                    <Route path="/Registration" element={<Registration />}></Route>
                    <Route path="/Dashbord" element={<Dashbord />}></Route>
                    <Route path="/Dashbord" element={<Admindashboard />}></Route>
                    <Route path="/Dashbord" element={<Techsupdashboard />}></Route>
                    <Route path="*" element={<Navigate to="/" />}></Route>

                </Routes>
            </div>
        </Router>
    );
}