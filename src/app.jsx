import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Pricing from "./components/Pricing";
import Contact from "./components/contact";
import Index from "./components";
import Blog from "./components/blog";
import MyProjects from "./components/myProjects";
import ProjectManage from "./components/projectManage";


function App()
{
    return(
        <div className="header">
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />}/>
                <Route path="/services" element={<Pricing />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/myprojects" element={<MyProjects />}/>
                <Route path="/myprojects/manage" element={<ProjectManage />}/>
            </Routes>
           
        </div>
        
    );
}

export default App;