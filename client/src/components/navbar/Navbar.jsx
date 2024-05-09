import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';
import ReactFlagsSelect from 'react-flags-select';
import GB from "react-flags-select";

import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    const {currentUser} = useContext(AuthContext);
    const userNameFirstLetter = user?.username.slice(0,1).toUpperCase();
    console.log(userNameFirstLetter);


    return (
        <div className='navbar'>
          <div className='navConatiner'>
            <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
                <span className='logo'>Booking App</span>
            </Link>
            <div className='navItems'>

            {user ? <div className='userInfoWrapper'>
                <Avatar
                    style={{backgroundColor: '#FFB6C1', color: 'black',}}>
                    {userNameFirstLetter}
                </Avatar>
                    <div className='userInfo'>
                        <h2>{user?.username}</h2>
                        <p>{user?.email}</p>                                            
                  </div>
                </div> : <>
                    <button className='navButton2'>Register</button>
                    <button className='navButton2'>Login</button>
                </>}
            </div>  
            <span className='userIcon'>
                <FontAwesomeIcon icon={faUser} />
            </span>
        </div>
        </div>                                     
    )
}

export default Navbar