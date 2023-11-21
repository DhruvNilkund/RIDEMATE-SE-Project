// Importing React and the associated stylesheet for the Homepage component
import React from 'react';
import './homepage.css';

// Functional component for the homepage
export default function Homepage({ history }) {
    
    // Function to handle entering the site and navigating to the login page
    const enterSite = e => {
        e.preventDefault();
        history.push('/login');
    };

    // Main component rendering
    return (
        // Main container with a custom class for styling
        <div className='container maint-cnt'>
            
            {/* Header navigation section */}
            <div className="header-nav">
                <span className="mytext1"> Unique Travels </span>
            </div>
            
            {/* Placeholder div */}
            <div className=""></div>

            {/* Main content container */}
            <div className="container">
                {/* Slogan section */}
                <div className="slogan">
                    <h1>
                        {/* Main slogan text with nested message div */}
                        <span>always Travel</span>
                        <div className="message">
                            {/* Individual words in the message */}
                            <div className="word1">Uniquely</div>
                            <div className="word2">Safely</div>
                            <div className="word3">with a smile</div>
                        </div>
                    </h1>
                </div>

                {/* Button to navigate to the login page */}
                <a href="/#" onClick={e => enterSite(e)} className="mainBtn">
                    {/* SVG element for button styling */}
                    <svg width="277" height="62">
                        {/* Defining a linear gradient for the button fill */}
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#FF8282" />
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        {/* Rectangular button with gradient styling */}
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    {/* Text inside the button */}
                    <span>Get Started!</span>
                </a>
            </div>
        </div>
    );
}
