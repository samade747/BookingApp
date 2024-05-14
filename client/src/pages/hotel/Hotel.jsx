import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/Header'; // Importing the Header component from the components folder
import Navbar from '../../components/navbar/Navbar'; // Importing the Navbar component from the components folder
import './hotel.css'; // Importing the hotel.css file
import { faCirceleArrowLeft, faCircleArrowRight, faLocationDot, faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // Importing the icons from the free-solid-svg-icons package 
import MailList from '../../components/mailList/MailList'; // Importing the MailList component from the components folder
import Footer from '../../components/footer/Footer'; // Importing the Footer component from the components folder
import { useState, useContext } from 'react'; // Importing the useState hook from the react package
import useFetch from '../../hooks/useFetch'; // Importing the useFetch hook from the hooks folder
import { useLocation, useNavigate } from 'react-router-dom'; // Importing the useLocation hook from the react-router-dom package
import { SearchContext } from '../../context/SearchContext'; // Importing the SearchContext from the context folder
import Reserve from '../../components/reserve/Reserve'; // Importing the Reserve component from the components folder
import { AuthContext } from '../../context/AuthContext';



