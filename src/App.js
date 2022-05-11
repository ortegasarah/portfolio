
// import About from './Pages/About'
import { Link } from "react-router-dom";
import Img1 from "./img/canele-01.png"
import Img2 from "./img/animecafe-02.png"
import Img3 from "./img/fluf.png"
import Img4 from "./img/bookclub.png"
import Img5 from "./img/187.png"
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="header"> 
       <p className="header-about">ABOUT</p>
       
       <div className="hover-about">
  <div className="about-description">
      <p>Hi, I'm Sarah, a</p> <p className="serif"> front-end developper </p>
      <p>, based in France but working </p> <p className="serif"> wordlwide.</p>
      <p> I’m interested in environmental</p> <p className="serif"> sustainability</p><p>, Blockchain Technology and food.</p>
      <p className="serif">Never stop learning </p> <p> Typescript, Solidity and HardHat, GraphQL</p>
  </div> 
</div>
       </div>
       <h1>Sarah Ortega - front-end developper</h1>


       
       </header>


        <section className="hovering">
<ul>
  <li className="hover-item">
 <h2>
 <span className='number-list'>01 </span>

 <a href='https://caneledujp.netlify.app/' target='_blank'  rel="noreferrer">
      <span> Canelé du Japon </span>
      <span className='description'>Full-Stack Project</span>
      <img src={Img1} alt='' width={400}/>
      </a>
     
    </h2>
  </li>
  <li>
    
    <h2>
    <span className='number-list'>02 </span>

    <a href='https://animecafe.herokuapp.com/' target='_blank'  rel="noreferrer">
      <span>Animecafe </span>
      <span className='description'>Handlebars</span>
      <img src={Img2} alt='' width={400}/>
    </a>
    </h2>

  </li>
  <li> 
    <h2>
    <span className='number-list'>03 </span>
    <a href='https://ortegasarah.github.io/GameLostFluF/' target='_blank'  rel="noreferrer">
    <span>Lost FluF </span>
    <span className='description'>Game using Canvas</span>
    <img src={Img3} alt='' width={800}/>
    </a>
    </h2>
  </li>

  <li> 
    <h2>
    <span className='number-list'>04 </span>

    <a href='https://ortegasarah.github.io/GameLostFluF/' target='_blank'  rel="noreferrer">
    <span>187whales </span>
    <span className='description'>Solidity NFT</span>
    <img src={Img5} alt='' width={400}/>
    </a>
    </h2>
  </li>

  <li> 
    <h2>
    <span className='number-list'>05 </span>
    <a href='https://abookclub.netlify.app/' target='_blank'  rel="noreferrer">
    <span>The BookClub </span>
    <span className='description'> with React.js, Rest.API</span>
    <img src={Img4} alt='' width={800}/>
    </a>
    </h2>
  </li>

</ul>
</section>



<li className='footer'>
    <ul className='footer-text'>
          <p><a href='https://twitter.com/sarahortga' target='_blank'  rel='noreferrer'> WORLDWIDE </a></p>
    </ul>
    <ul className='footer-text'>
      {/* <p>font by the amazing @boem_c4 and collletttivo.it</p> */}
       <a href='https://github.com/ortegasarah/' target='_blank'  rel='noreferrer'> GitHub </a></ul>
      <ul className='footer-text'>
      <p><a href='https://www.linkedin.com/in/ortegasarah/' target='_blank'  rel='noreferrer'> LinkedIn </a></p>
      </ul>
      <ul className='footer-text'>
      <p><a href='https://twitter.com/sarahortga' target='_blank'  rel='noreferrer'> Twitter </a></p>
      </ul>
      <ul className='footer-text'>
      <p><a href='https://twitter.com/sarahortga' target='_blank'  rel='noreferrer'> Email </a></p>
      </ul>
      {/* hover with usernme */}
</li>




</div>

  );
}

export default App;
