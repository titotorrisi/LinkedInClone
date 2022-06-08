import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header = (props) => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="/images/linkedin.png" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption title="Me" avatar='/images/aarjav.png'/>
            </div>
        </div>
    )
}

export default Header;
