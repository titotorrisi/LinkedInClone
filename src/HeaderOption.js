import React from 'react'
import './HeaderOption.css'
import Avatar from '@mui/material/Avatar';


const HeaderOption = ({avatar, title, Icon}) => {
    return (
        <div className="headerOption">
            {Icon && <Icon className='headerOption__icon' /> }
            {avatar && <Avatar src={avatar} className='headerOption__icon' /> }
            <h3 className="headerOption__title"> {title} </h3>



        </div>
    )
}

export default HeaderOption;
