import React from 'react'
import { NavLink } from "react-router-dom";


export const Nav = () => {

    return (
        <div >
            <NavLink
                activeStyle={{ color: '#333' }}
                className="Link" to='/home' >
                <span>Home</span>
            </NavLink>
            <NavLink
                activeStyle={{ color: '#333' }}
                className="Link" to='/add' >Add Activity</NavLink>
            <NavLink
                activeStyle={{ color: '#333' }}
                className="Link" to='/about' >About</NavLink>
        </div>
    )
}

