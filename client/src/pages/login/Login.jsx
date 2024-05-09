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



}