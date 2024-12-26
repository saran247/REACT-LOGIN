import { useState } from "react";
import { Link } from "react-router-dom"; 
import axios from 'axios';
import './Signup.css';  
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState(""); 
    const [alertSeverity, setAlertSeverity] = useState("success"); 
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.error("All fields are required!");
            return;
        }

        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log("Server Response:", result);
                if (result.data === "Success") {
                    alert("Login Successful!");
                    navigate('/home'); 
                } else {
                    setAlertMessage("Enter correct Email and Password.");
                    setAlertSeverity("error");
                }
            })
            .catch(err => {
                console.error("Error:", err);
                setAlertMessage("Something went wrong. Please try again.");
                setAlertSeverity("error");
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 className="heading">User Login</h2>
                <hr />
                
                {alertMessage && (
                    <Alert severity={alertSeverity}>{alertMessage}</Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="lab" htmlFor="email"><strong>Email</strong></label>
                        <input
                            required
                            type="email"
                            placeholder="Enter your email"
                            className="inp form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="lab" htmlFor="password"><strong>Password</strong></label>
                        <input 
                            required            
                            type="password"
                            placeholder="Enter password"
                            className="inp form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p className="msg">Don't have an Account?</p>
                <Link to="/signup" className="btn btn2 btn-default border w-100 rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;
