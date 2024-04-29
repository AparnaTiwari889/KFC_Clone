import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Deals from "./components/Deals";
import Signin from "./components/Signin";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/signin" element={<Signin/>}/>
      
       

        
      </Routes>
      

      
      
      
      <Footer />
    </>
  );
}

export default App;


