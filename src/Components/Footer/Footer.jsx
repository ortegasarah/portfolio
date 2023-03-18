import React from 'react'
import { Container } from './styles'

const Footer = () => {
    return (
        <Container>
            <ul className='footer'>
                <li className='footer-text'>
                    <p>based in NYC</p>
                </li>
                <li className='footer-text'>
                    {/* <p>font by the amazing @boem_c4 and collletttivo.it</p> */}
                    <a href='https://github.com/ortegasarah/' target='_blank' rel='noreferrer'> GitHub </a></li>
                <li className='footer-text'>
                    <p><a href='https://www.linkedin.com/in/ortegasarah/' target='_blank' rel='noreferrer'> LinkedIn </a></p>
                </li>
                <li className='footer-text'>
                    <p><a href='https://twitter.com/0xchocolatine' target='_blank' rel='noreferrer'> Twitter </a></p>
                </li>
                <li className='footer-text'>
                    <p><a href = "mailto: sarah.ortega.fuentes@gmail.com"> Email </a></p>
                </li>
            </ul>
        </Container>
    )
}

export default Footer