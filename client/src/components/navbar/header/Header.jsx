// Importing neccessary modules and components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing the FontAwesomeIcon component
import "./header.css"; // Importing the header.css file
import Background from "../../background/Background"; // Importing the Background image
import { faBed, faCalendarDays, faCar, faMinus, faPerson, faPlane, faPlus, faTaxi  } from '@fortawesome/free-solid-svg-icons'; // Importing the bed icon from the free-solid-svg-icons package
import { DateRange } from 'react-date-range'; // Importing the DateRange component from the react-date-range package
import { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css'; // Importing the styles for the DateRange component
import 'react-date-range/dist/theme/default.css'; // Importing the theme for the DateRange component
import { format } from 'date-fns'; // Importing the format function from the date-fns package
import { useNavigate, useLocation } from 'react-router-dom'; // Importing the useNavigate and useLocation hooks
import { SearchContext } from '../../context/SearchContext'; // Importing the SearchContext from the context folder


// Defining the Header component
const Header = ({  }) => {
    // Initializing the state using useState hook
    const location = useLocation(); // Using the useLocation hook to get the current location
    const [destination, setDestination] = useState(''); // Initializing the destination state
    const [openDate, setOpenDate] = useState(false) // state to control open and close the date picker
    const [dates, setDates] = useState([ // state for selected dates
        {
            startDate: new Date(), // setting the start date to the current date
            endDate: new Date(), // setting the end date to the current date
            key: 'selection' // setting the key to 'selection'

        }
        
    ])
    const [openOptions, setOpenOptions] = useState(false) // state to control open and close the options
    const [options, setOptions] = useState({ // state for options
        adult: 1, // setting the adult option to 1
        children: 0, // setting the children option to 0
        room: 1, // setting the room option to 1
    })
    
    const navigate = useNavigate(); // using the useNavigate hook to navigate


    // function to handle increamt/decremet of options
    const handleOptions = (name, operation) => {
        setOptions(prev => {
            return {...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1}
        })
    }

    // Destructuring dispatch from the Searchcontext
    const {dispatch} = useContext(SearchContext);

    // function to handle search
    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {destination, dates, options}})
        navigate("/hotels", {state: {destination, dates, options}})
    }

// rendering the component
    return (
        <div className='container'>
            <div className={type === "list" ? "headerHotels" : "header"}>
                <div className='headerContainer'>
                    <div className='headerList'>


                        <div className='headerListItem active'>
                            <FontAwesomeIcon icon={faBed} />
                            <span>Stays</span>
                        </div>

                        <div className='headerListItem'>
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Flights</span>
                        </div>

                        <div className='headerListItem'>
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car rentals</span>
                        </div>


                        <div className='headerListItem'>
                            <FontAwesomeIcon icon={faBed} />
                            <span>Attractions</span>
                        </div>


                        <div className='headerListItem'>
                            <FontAwesomeIcon icon={faTaxi} />   
                            <span>Airport Taxis</span>
                        </div>            
                </div>
                {type === "list" && <div className="headerSearch hotelsHeader">
            
                <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
                 </div>
           
                 <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                         <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className='date'
                        />}
                </div>


                
            {/* Options menu */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className='headerIcon' />
              <span className='headerSearchText' onClick={()=> setOpenOptions(!openOptions)}>{`${options.adult} adults - ${options.children} children - ${options.room} room`}</span>
              { openOptions &&
                <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button disabled={options.adult <= 1 } className="optionCounterButton" onClick={()=>handleOptions('adult',"d")}><FontAwesomeIcon icon={faMinus}/> </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOptions('adult',"i")}><FontAwesomeIcon icon={faPlus}/></button>
                  </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button disabled={options.children <= 0 } className="optionCounterButton" onClick={()=>handleOptions('children',"d")}><FontAwesomeIcon icon={faMinus}/></button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOptions('children',"i")}><FontAwesomeIcon icon={faPlus}/></button>
                  </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button disabled={options.room <= 1 } className="optionCounterButton" onClick={()=>handleOptions('room',"d")}><FontAwesomeIcon icon={faMinus}/></button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOptions('room',"i")}><FontAwesomeIcon icon={faPlus}/></button>
                  </div>
                </div>
              </div>}
            </div>
            {/* Search button */}
            <div className="headerSearchItem2">
              <button className="headerBtn">Search</button>
            </div>
          </div>}
        </div>
      </div>
      {/* Header text section */}
      {type !== "list" && <div className="headerText" style={type === "list" ? {backgroundColor:"#f2f2f2"} :{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="headerAndPara" >
          {/* Title */}
          <h1 className="headerTitle" >
            Make yourself at home in paradise
          </h1>
          {/* Subtitle */}
          <p className='headerPara' >Choose from cabins, houses and more</p>
          {/* Button */}
          <button className='holidayRentButton'>Discover holiday rentals</button>
          {/* Search form */}
          <div className="headerSearch">
            <div className="headerSearchItem">
              {/* Destination input */}
              <FontAwesomeIcon icon={faBed} className='headerIcon' />
              <input type="text" placeholder='Where are you going?' className='headerSearchInput'onChange={(e)=> setDestination(e.target.value)} />
            </div>
            {/* Date range picker */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
              <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                minDate={new Date()}
                className='date'
              />}
            </div>
            {/* Options menu */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className='headerIcon' />
              <span className='headerSearchText' onClick={()=> setOpenOptions(!openOptions)}>{`${options.adult} adults - ${options.children} children - ${options.room} room`}</span>
              { openOptions &&
                <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button disabled={options.adult <= 1 } className="optionCounterButton" onClick={()=>handleOptions('adult',"d")}><FontAwesomeIcon icon={faMinus}/> </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOptions('adult',"i")}><FontAwesomeIcon icon={faPlus}/></button>
                  </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button disabled={options.children <= 0 } className="optionCounterButton" onClick={()=>handleOptions('children',"d")}><FontAwesomeIcon icon={faMinus}/></button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOptions('children',"i")}><FontAwesomeIcon icon={faPlus}/></button>
                  </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button disabled={options.room <= 1 } className="optionCounterButton" onClick={()=>handleOptions('room',"d")}><FontAwesomeIcon icon={faMinus}/></button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOptions('room',"i")}><FontAwesomeIcon icon={faPlus}/></button>
                  </div>
                </div>
              </div>}
            </div>
            {/* Search button */}
            <div className="headerSearchItem2">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>}
    </div>

  )
}

export default Header // Exporting Header component