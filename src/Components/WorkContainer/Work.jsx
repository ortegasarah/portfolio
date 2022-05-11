import React from 'react'

const Work= () => {
    return (
        <div>
            <section className="hovering">
                <ul>
                    <li className="hover-item">
                        <h2>
                            <span className='number-list'>01 </span>

                            <a href='https://caneledujp.netlify.app/' target='_blank' rel="noreferrer">
                                <span> Canelé du Japon </span>
                                <span className='description'>Full-Stack Project</span>
                                <img src={Img1} alt='' width={400} />
                            </a>

                        </h2>
                    </li>
                    <li>

                        <h2>
                            <span className='number-list'>02 </span>

                            <a href='https://animecafe.herokuapp.com/' target='_blank' rel="noreferrer">
                                <span>Animecafe </span>
                                <span className='description'>Handlebars</span>
                                <img src={Img2} alt='' width={400} />
                            </a>
                        </h2>

                    </li>
                    <li>
                        <h2>
                            <span className='number-list'>03 </span>
                            <a href='https://ortegasarah.github.io/GameLostFluF/' target='_blank' rel="noreferrer">
                                <span>Lost FluF </span>
                                <span className='description'>Game using Canvas</span>
                                <img src={Img3} alt='' width={800} />
                            </a>
                        </h2>
                    </li>

                    <li>
                        <h2>
                            <span className='number-list'>04 </span>

                            <a href='https://ortegasarah.github.io/GameLostFluF/' target='_blank' rel="noreferrer">
                                <span>187whales </span>
                                <span className='description'>Solidity NFT</span>
                                <img src={Img5} alt='' width={400} />
                            </a>
                        </h2>
                    </li>

                    <li>
                        <h2>
                            <span className='number-list'>05 </span>
                            <a href='https://abookclub.netlify.app/' target='_blank' rel="noreferrer">
                                <span>The BookClub </span>
                                <span className='description'> with React.js, Rest.API</span>
                                <img src={Img4} alt='' width={800} />
                            </a>
                        </h2>
                    </li>

                </ul>
            </section>
        </div>
    )
}


export default Work