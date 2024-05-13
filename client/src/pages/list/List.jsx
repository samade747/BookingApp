import { useLocation } from 'react-router-dom'; // Importing the useLocation hook from the react-router-dom package
import Header from '../../components/header/Header'; // Importing the Header component from the components folder
import Navbar from '../../components/navbar/Navbar'; // Importing the Navbar component from the components folder
import "./list.css" // Importing the list.css file
import { useState } from 'react'; // Importing the useState hook from the react package
import { format } from 'date-fns'; // Importing the format function from the date-fns package
import { DateRange } from 'react-date-range'; // Importing the DateRange component from the react-date-range package
import SearchItem from '../../components/searchItem/SearchItem'; // Importing the SearchItem component from the components folder
import useFetch from '../../hooks/useFetch'; // Importing the useFetch hook from the hooks folder

const List = () => { // Defining the List component
    const location = useLocation() // Getting current location using the useLocation hook
    const [destination, setDestination] = useState(location.state.destination) // setting state for destination with intial value
    const [dates, setDates] = useState(location.state.dates) // setting state for dates with intial value
    const [openDate, setOpenDate] = useState(false) // setting state for options with intial value

    







    
}