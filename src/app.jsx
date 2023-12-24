import React, { useState, createContext, useContext } from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Pricing from "./components/Pricing";
import Contact from "./components/contact";
import Index from "./components";
import Blog from "./components/blog";
import MyProjects from "./components/myProjects";
import ProjectManage from "./components/projectManage";
import SignUp from "./components/signUp";


const AuthContext = createContext();

function App()
{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login
    const login = () => {
        // Perform your login logic here
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const logout = () => {
        // Perform your logout logic here
        setIsLoggedIn(false);
    };

    return(
        <div className="header">
            <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />}/>
                <Route path="/services" element={<Pricing />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/myprojects" element={<MyProjects />}/>
                <Route path="/myprojects/manage" element={<ProjectManage />}/>
                <Route path="/signup" element={<SignUp />}/>
            </Routes>
            </AuthContext.Provider>
        </div>
        
    );
}

// Custom hook to access the authentication context
export function useAuth() {
    return useContext(AuthContext);
}

export default App;