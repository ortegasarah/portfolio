import React from 'react'
import { Container } from './styles'

const Footer = () => {
    return (
        <Container>
            <li className='footer'>
                {/* <ul className='footer-text'>
                    <p><a href='https://twitter.com/sarahortga' target='_blank' rel='noreferrer'> WORLDWIDE </a></p>
                </ul> */}
                <ul className='footer-text'>
                    {/* <p>font by the amazing @boem_c4 and collletttivo.it</p> */}
                    <a href='https://github.com/ortegasarah/' target='_blank' rel='noreferrer'> GitHub </a></ul>
                <ul className='footer-text'>
                    <p><a href='https://www.linkedin.com/in/ortegasarah/' target='_blank' rel='noreferrer'> LinkedIn </a></p>
                </ul>
                <ul className='footer-text'>
                    <p><a href='https://twitter.com/sarahortga' target='_blank' rel='noreferrer'> Twitter </a></p>
                </ul>
                <ul className='footer-text'>
                    <p><a href='https://twitter.com/sarahortga' target='_blank' rel='noreferrer'> Email </a></p>
                </ul>
            </li>
        </Container>
    )
}

export default Footer