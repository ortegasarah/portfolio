import React from 'react'
import { Container, H2, NumberList } from './styles'
import Img1 from "../../img/canele-01.png"
import Img2 from "../../img/animecafe-02.png"
import Img3 from "../../img/fluf.png"
import Img4 from "../../img/bookclub.png"
import Img5 from "../../img/thezigzagproject.com_.png"
import Img6 from "../../img/bebezuzu.myshopify.com_.png"
import Img7 from "../../img/beavermemecoin.png"


const Work= () => {
    return (
        <div>
            {/* <NavBar/> */}
            <Container>
            <H2>
                <span>Hey! I'm Sarah Ortega — </span>
                <span className='description'> a front-end developer with a design background.
I like to transform ideas and designs into modern, clean, and readable code. À bientôt!</span>
            </H2>
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
                            <NumberList>02</NumberList>
                            <a href='https://bebezuzu.myshopify.com/' target='_blank' rel="noreferrer">
                                <span>Bebe Zuzu </span>
                                <span className='description'> Shopify custom theme, pw: zuzu</span>
                                <img src={Img6} alt='' width={800} />
                            </a>
                        </H2>
                    </li>

                    <li>

                        <H2>
                            <NumberList>03</NumberList>

                            <a href='https://github.com/ortegasarah/animecafe' target='_blank' rel="noreferrer">
                                <span>Animecafe </span>
                                <span className='description'>Full-Stack with Handlebars</span>
                                <img src={Img2} alt='' width={400} />
                            </a>
                        </H2>

                    </li>
                    <li>
                        <H2>
                            <NumberList>04</NumberList>
                            <a href='https://beavermemecoin.com/' target='_blank' rel="noreferrer">
                                <span> $BEAVER Memecoin </span>
                                <span className='description'>HTML/CSS</span>
                                <img src={Img7} alt='' width={800} />
                            </a>
                        </H2>
                    </li>

                    <li>
                        <H2>
                            <NumberList>05</NumberList>
                            <a href='https://ortegasarah.github.io/GameLostFluF/' target='_blank' rel="noreferrer">
                                <span> Lost FluF </span>
                                <span className='description'> Game with Canvas Graphics </span>
                                <img src={Img3} alt='' width={800} />
                            </a>
                        </H2>
                    </li>


                    <li>
                        <H2>
                            <NumberList>06</NumberList>
                            <a href='https://abookclub.netlify.app/' target='_blank' rel="noreferrer">
                                <span>The BookClub </span>
                                <span className='description'> React.js, Rest.API</span>
                                <img src={Img4} alt='' width={400} />
                            </a>
                        </H2>
                    </li>

                    <li>
                        <H2>
                            <NumberList>07</NumberList>

                            <a href='https://thezigzagproject.com/' target='_blank' rel="noreferrer">
                                <span>The Zigzag Project</span>
                                <span className='description'> Cargo website + design</span>
                                <img src={Img5} alt='' width={400} />
                            </a>
                        </H2>
                    </li>

                   

                </ul>
            </Container>
        </div>
    )
}


export default Work