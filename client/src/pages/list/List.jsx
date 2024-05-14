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

    const [options, setOptions] = useState(location.state.options) // setting state for options with intial value
    const [min, setMax] = useState(undefined) // setting state for options with intial value
    const [max, setMin] = useState(undefined) // setting state for options with intial value

    console.log(location) // logging location to the console

    
    const { data, loading, error,reFetch } = useFetch(`http://localhost:5000/api/hotels/cityName?city=${destination}&min=${min || 0}&max=${max || 999}`) // Using the useFetch hook to fetch data from the server

    const handleClick = () => { // function to handle search button click
        reFetch(); // calling the reFetch function to fetch data again
    };

    return (
        <div>
          <Navbar /> {/* Calling the Navbar component */}
            <Header type={"list"} /> {/* Calling the Header component */}
              <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <div className='listTitle'>
                            <div className='listItem'>
                                <label>Destination</label>
                                    <input type="text" placeholder={destination} />
                            </div>
                            <div className='listItem'>
                                <label>Check-in Date</label>
                                <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}   </span> // displaying the check-in and check-out dates
                                { openDate && 
                                    <DateRange onChange={item => setDates([item.selection])} minDate={new Date()} ranges={dates} />}                                                                  
                            </div>

                            <div className='listItem'>
                                <label>Options</label>
                                <div className='listOptions'>
                                    <div className='listOptionItem'>
                                        <span className='listOptionText'>Min price <small>per night</small></span>
                                        <input type="number" className='listOptionInput' onChange={e => setMin(e.target.value)} />
                                    </div>

                                    <div className='listOptionItem'>
                                        <span className='listOptionText'>Max price <small>per night</small></span>
                                        <input type="number" className='listOptionInput' onChange={e => setMax(e.target.value)} />                                     
                                    </div>

                                    <div className='listOptionItem'>
                                        <span className='listOptionText'>Adult</span>
                                        <input type="number" className='listOptionInput' min={1} placeholder={options.adult} />
                                    </div>

                                    <div className='listOptionItem'>
                                        <span className='listOptionText' >Children</span>
                                        <input type="number" className='listOptionInput' min={0} placeholder={options.children} />
                                    </div>

                                    <div className='listOptionItem'>
                                        <span className='listOptionText'>Room</span>
                                        <input type="number" className='listOptionInput' min={1} placeholder={options.room} />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick}>Search</button>
                    </div>

                    <div className='listResult'>

                        {loading ? "Loading..." : 
                        <>
                        {data?.map(item => (
                            <SearchItem item={item} key={item._id} />
                        ))
                        }
                        </>
                        }                                           
                    </div>
                </div>
            </div>                         
        </div>
    );
}

export default List; // export list component