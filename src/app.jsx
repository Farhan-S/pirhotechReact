import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Index from "./components";
import Blog from "./components/blog";


function App()
{
    return(
        <div className="header">
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
           
        </div>
        
    );
}

export default App;