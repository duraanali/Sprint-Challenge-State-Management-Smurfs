import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink exact to='/'>Smurf Population</NavLink> {' - '}
            <NavLink exact to='/SmurfForm'>Add Smurf</NavLink>
        </div>
    )
}

export default NavBar;