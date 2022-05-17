import Work from "./Components/WorkContainer/Work";
import Footer from "./Components/Footer/Footer";
import { GlobalStyle } from "./globalStyles";
import AboutDetail from "./Components/About/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
          <Route path="/" element={<Work/>} />
          <Route path="/about" element={<AboutDetail/>} />
      </Routes>
      
      <Footer />
{/* 
      <NavBar />
     
      <Footer /> */}

  </div>

  );
}

export default App;
