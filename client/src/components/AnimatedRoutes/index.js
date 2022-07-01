import React from "react";
import { Route, Routes, useLocation } from "react-router";
import About from '../About'
import MyWork from '../MyWork';
import ContactMe from '../ContactMe'
import Home from '../Home';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="mywork" element={<MyWork />} />
            <Route path="contactme" element={<ContactMe/>} />
        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes;