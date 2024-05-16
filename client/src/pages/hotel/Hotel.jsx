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

const Hotel = () => {

    // 
    const location = useLocation(); // Getting current location using the useLocation hook
    const id = location.pathname.split("/")[2]; // extracting the id from the pathname

    console.log(id); // logging the id to the console

    const [slideNumber, setSlideNumber] = useState(0); // setting state for slideNumber with intial value
    const [open, setOpen] = useState(false); // setting state for open with intial value
    const [openModal, setOpenModal] = useState(false); // setting state for openModal with intial value

    // Feteching hotels data using custom hook
    const { data, loading, error } = useFetch(`http://localhost:5000/api/hotels/find/${id}`); // Using the useFetch hook to fetch data from the server

    // Context API usage
    const {dates, options}= useContext(SearchContext); // Extracting the dates and options from the SearchContext
    const { user } = useContext(AuthContext); // Extracting the user from the AuthContext

    const navigate = useNavigate(); // using the useNavigate hook to navigate
    const milli_seconds_per_day = 1000 * 60 * 60 * 24; // setting the milli_seconds to 1000

    function dayDfference(date1, date2) { // function to calculate the number of days between two dates
        const timeDiff = Math.abs(date2.getTime() - date1.getTime()); // calculating the time difference in milliseconds
        const diffDays = Math.ceil(timeDiff / milli_seconds_per_day); // calculating the number of days
        return diffDays; // returning the number of days
    }

    const days = dayDfference(dates[0].endDate, dates[0].startDate); // calculating the number of days between the start and end dates

    const handleOpen = (i) => { //  function to handle opening the modal
        setSlideNumber(i); // setting the slideNumber to i
        setOpen(true); // setting the open to true  
        
    }

    const handleMove = (dir) => { // function to handle moving the slide  
        let newSlideNumber;
        if (dir === "l") { // if dir is left
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1; // if slideNumber is 0 set newSlideNumber to 5 else set newSlideNumber to slideNumber - 1
        } else { // if dir is right
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1; // if slideNumber is 5 set newSlideNumber to 0 else set newSlideNumber to slideNumber + 1
        }
        setSlideNumber(newSlideNumber); // setting the slideNumber to newSlideNumber
}

    // booking seat confromation function
    const handleClick = () => {
        if (user) { //  if user is logged in
            setOpenModal(true); // open the modal
    } else { // if user is not logged in
        navigate("/login"); // navigate to the login page
    }
}

    return(
        <div>
            <Navbar /> {/* Rendering Navbar component */}
            <Header type="list" /> {/* Rendering Header component with type "list" */}
            {loading ? "Loading..." : <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon 
                    icon={faCircleXmark}
                    className="close"
                    onClick={() => setOpen(false)}
                    />
                    
                    <FontAwesomeIcon 
                    
                    
                    />




                    }
                
                }



        </div>





    )







}