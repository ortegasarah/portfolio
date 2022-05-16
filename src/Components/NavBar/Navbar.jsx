import React from 'react'
import { Container, About, H1 } from './styles'
import { useState } from 'react'
import AboutDetail from '../About/About'
import { Link } from "react-router-dom";

const NavBar = () => {
   
    return (
        <Container>
                <div className="header">
                    <p className="header-about" >ABOUT</p>
                </div>
                <H1>Sarah Ortega — front-end developper</H1>



            </Container>
        
    )

}

export default NavBar