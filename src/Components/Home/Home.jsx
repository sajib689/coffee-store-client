import React from 'react';
import './Home.css'
import bgImage from '../../assets/images/more/6.jpeg'
const Home = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/hfXknpT/6.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    );
};

export default Home;