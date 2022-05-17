import React from 'react'
import { Container } from './styles'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Container>
            <div className="header">
                <NavLink to="/about" >
                    <p className="header-about" >ABOUT</p>
                </NavLink>
            </div>
        </Container>
    )
}

export default NavBar