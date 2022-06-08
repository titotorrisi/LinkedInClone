import React from 'react'
import {Avatar} from "@mui/material";
import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="/images/bg.jpg" className="" alt=""/>
                <Avatar src="" alt="" className='sidebar__avatar' />
                <h2 className="sidebar__name">Aarjav Chandarana</h2>
                <h4>www.aarjav.ca</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                   <p>Who viewed you </p>
                    <p className="sidebar__statNumber">2543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar;
