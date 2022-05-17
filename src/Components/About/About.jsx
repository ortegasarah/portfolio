import React from 'react'
import { AboutContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { Container, H1 } from '../NavBar/styles'
import { GlobalStyle } from '../../globalStyles'


const AboutDetail = () => {
    const isBackgroundPink = true;

    return (
        // <div style={{
        //     backgroundColor: isBackgroundPink ? 'background-pink' : 'background-grey',
        //   }}>
        <AboutContainer>
            <GlobalStyle />

            <Container >
                <div className="header">
                    <NavLink to="/" >
                        <p className="header-about" >BACK TO SELECTED WORK</p>
                    </NavLink>
                </div>
            </Container>
            <H1>Hello! I'm Sarah, a front-end developer with a design background.</H1>
            <H1>I like to transform ideas and designs into modern, clean, and readable code.</H1>
            <H1>Resumé
                À bientôt!
            </H1>

        </AboutContainer>
    )

}

export default AboutDetail