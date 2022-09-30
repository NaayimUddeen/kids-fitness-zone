import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo1 from '../../img/banner.png'
import logo2 from '../../img/banner2.png'

const Header = () => {
    return (
        <div className='container'>
            <div className="navbar container">
                <img className='img-fluid ms-5 nav' src={logo1} alt="" />
                <div className='me-5'>
                    <h1>Fitness Zone</h1>
                    <p style={{ fontStyle: "italic", fontSize: "16px" }}>Select Your Activities</p>
                </div>
                <img className='img-fluid ms-5 nav' src={logo2} alt="" />
            </div>
            <div >
            </div>
        </div>
    );
};

export default Header;