import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
     const navigate = useNavigate();
     const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
})
const {loading, error, dispatch} = useContext(AuthContext); 

const handleChange = (e)=>{
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value}))
}

// defne a functon to handle login
const loginhandler = async (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    dispatch({type: "LOGIN_START"}); // dispatch the LOGIN_START action
      try{
        const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});

      // show success test notification
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate("/"); // navigate to the home page after successful login

      } catch(error) {
        dispatch({type: "LOGIN_FAILURE", payload: error.response.data});
        toast.error(error.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }



}
return(
      <>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition=  "Bpunce"
      >

            
      </ToastContainer>     
      


      <div className="login">
        <div className="lContainer">
          <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
          <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
            {/* button for login */}
          <button disabled={loading} onClick={loginhandler} className="lButton">Login </button>
            {/* Display error message if login fails */}
          {error && <span>{error.message}</span>}
      </div>
      </div>
      </>
)

}


export default Login; // Exporting Login component
