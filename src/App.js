
// import About from './Pages/About'
import { Link } from "react-router-dom";
import About from "./Pages/About";
import NavBar from "./Components/NavBar/Navbar";
import Work from "./Components/WorkContainer/Work";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">

      <NavBar />
      <Work />
      <Footer />

  </div>

  );
}

export default App;
