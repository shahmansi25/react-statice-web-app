import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import './style/App.scss';
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/Footer.scss";
import "./style/contact.scss";
import "./style/mediaQuery.scss";

import Service from "./components/Service";

function App() {
  return (
    <div className="App">
    
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route  path = "/services" element = {<Service/>} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
