import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/Navbar'
import Work from '../WorkContainer/Work'
import { GlobalStyle } from '../../globalStyles'
const HomePage = () => {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Work />
            <Footer />
        </>
    )
}

export default HomePage