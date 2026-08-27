import React from 'react';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Approach from '../components/sections/Approach';
import Workflow from '../components/sections/Workflow';
import Capabilities from '../components/sections/Capabilities';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Marquee />
            <FeaturedProjects />
            <Approach />
            <Capabilities />
            <Workflow />
        </div>
    );
};

export default Home;
