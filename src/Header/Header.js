import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className='text-6xl text-cyan-800'>Welcome to the Banglish  Hotel  </h1>
            <nav>
                <Link className='text-yellow-100 text-xl font-mono' to="/">Home</Link>
                <Link className='text-yellow-100 text-xl ml-2 font-mono' to="fish">Fish </Link>

            </nav>
            {/* <Link to='/home'>Home </Link> */}
        </div>
    );
};

export default Header;