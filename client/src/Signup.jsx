import { useState } from "react";
import { Link } from "react-router-dom"; 
import axios from 'axios';
import './Signup.css';  
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !password) {
        console.error("All fields are required!");
        return;
      }
  
      axios.post("http://localhost:3001/register", { name, email, password })
        .then(result => {
          console.log("Server Response:", result);
          navigate('/login'); 
        })
        .catch(err => {
          console.error("Error:", err);
        });
    };
  
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="heading">User Registration</h2>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="lab" htmlFor="name"><strong>Name</strong></label>
            <input
              required="yes"
              type="text"
              placeholder="Enter your name"
              className="inp form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="lab" htmlFor="email"><strong>Email</strong></label>
            <input
              required="yes"
              type="email"
              placeholder="Enter your email"
              className="inp form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="lab" htmlFor="password"><strong>Password</strong></label>
            <input 
              required="yes"            
              type="password"
              placeholder="Enter password"
              className="inp form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button  type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p className="msg">Already have an Account?</p>
        <Link to="/login" className="btn btn2 btn-default border w-100 rounded-0 text-decoration-none">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
