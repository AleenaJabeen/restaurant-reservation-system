import React from 'react'
import HeroSection from './HeroSection';
import FeatureGoals from './FeatureGoals';
import Features from './Features';
import About from './About';
import Navbar from '../ReusableComponents/Navbar';
const Home=()=>{
    
    return (
        <>
        <HeroSection/>
        <div id='about'>
        <About/>
        </div>
        <Features/>
        <FeatureGoals/>
        </>
    );

};
export default Home;