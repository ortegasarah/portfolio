import React from 'react'
import { Container, H2, NumberList } from './styles'
import Img1 from "../../img/canele-01.png"
import Img2 from "../../img/animecafe-02.png"
import Img3 from "../../img/fluf.png"
import Img4 from "../../img/bookclub.png"
import Img5 from "../../img/187.png"

const Work= () => {
    return (
        <div>
            <Container>
                <ul>
                    <li className="hover-item">
                        <H2>
                            <NumberList>01 </NumberList>

                            <a href='https://caneledujp.netlify.app/' target='_blank' rel="noreferrer">
                                <span> Canelé du Japon </span>
                                <span className='description'>Full-Stack MERN</span>
                                <img src={Img1} alt='' width={400} />
                            </a>

                        </H2>
                    </li>
                    <li>

                        <H2>
                            <NumberList>02 </NumberList>

                            <a href='https://animecafe.herokuapp.com/' target='_blank' rel="noreferrer">
                                <span>Animecafe </span>
                                <span className='description'>Full-Stack with Handlebars</span>
                                <img src={Img2} alt='' width={400} />
                            </a>
                        </H2>

                    </li>
                    <li>
                        <H2>
                            <NumberList>03 </NumberList>
                            <a href='https://ortegasarah.github.io/GameLostFluF/' target='_blank' rel="noreferrer">
                                <span> Lost FluF </span>
                                <span className='description'> Game with Canvas Graphics </span>
                                <img src={Img3} alt='' width={800} />
                            </a>
                        </H2>
                    </li>

                    <li>
                        <H2>
                            <NumberList>04 </NumberList>

                            <a href='' target='_blank' rel="noreferrer">
                                <span>187whales </span>
                                <span className='description'>Solidity - coming soon</span>
                                <img src={Img5} alt='' width={400} />
                            </a>
                        </H2>
                    </li>

                    <li>
                        <H2>
                            <NumberList>05 </NumberList>
                            <a href='https://abookclub.netlify.app/' target='_blank' rel="noreferrer">
                                <span>The BookClub </span>
                                <span className='description'> with React.js, Rest.API</span>
                                <img src={Img4} alt='' width={800} />
                            </a>
                        </H2>
                    </li>

                </ul>
            </Container>
        </div>
    )
}


export default Work