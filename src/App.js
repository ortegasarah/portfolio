import { Link } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Work from "./Components/WorkContainer/Work";
import Footer from "./Components/Footer/Footer";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <NavBar />
      <Work />
      <Footer />

  </div>

  );
}

export default App;
