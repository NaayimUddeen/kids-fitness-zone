import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserInfoCart.css'
import userPic from '../../../../img/user pic.jpg'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


const UserInfoCart = ({ newCart, chart}) => {
    // console.log(props);
    console.log(newCart);
    
    // let total = 0;
    // for (const allChart of newCart) {
    //     total = total + newCart.Time_Required;
    // }
    return (
        <div className="cart-contain">
            <div className='mt-4 d-flex align-items-center justify-content-center'>
                <img className='user-pic img-fluid' src={userPic} alt="" />
                <h3>Name : Kelvin Clain</h3>
            </div>
            {/* information */}
            <div className=' m-2 p-2 d-flex align-items-center justify-content-center'>
                <div>
                    <p ><small><span class="shadow-lg badge rounded-pill text-bg-primary">Weight: 75 kg</span></small></p>
                </div>
                <div>
                    <p ><small><span class="shadow-lg badge rounded-pill text-bg-primary">Height: 4.6 inch</span></small></p>
                </div>
                <div>
                    <p ><small><span class="shadow-lg badge rounded-pill text-bg-primary">Age: 11 year</span></small></p>
                </div>
            </div>
            {/* add a Take Rest break */}
            <div className='shadow-lg p-3 mb-5 badge text-bg-secondary ms-4'>
                <p className='fw-bold '>Take Rest</p>
                <button type="button" className="m-1 btn btn-outline-warning badge text-bg-warning bs-btn-font-size: .75rem;">
                    2mnt
                </button>
                <button type="button" className="m-1 btn btn-outline-warning badge text-bg-warning bs-btn-font-size: .75rem;">
                    4mnt
                </button>
                <button type="button" className="m-1 btn btn-outline-warning badge text-bg-warning bs-btn-font-size: .75rem;">
                    6mnt
                </button>
                <button type="button" className="m-1 btn btn-outline-warning badge text-bg-warning bs-btn-font-size: .75rem;">
                    10mnt
                </button>
            </div>
            {/* Exercise Details */}

            <div className='shadow-lg p-3 mb-5 badge text-bg-secondary ms-4' >
                <p className='fw-bold '><span className='text-bg-warning'>Exercise Details-</span></p>
                <p className='fw-bold '>Take Rest Time :<span className='text-bg-warning'>Exercise Details-</span></p>
                <p className='fw-bold '>Exercise Time :<span className='text-bg-warning'>Exercise Details-</span></p>
            </div>
            <div className='d-grid'>
                <button
                    // onClick={() => handleAddToCartClick(chart)}
                    className="btn-car btn btn-success w-4 d-flex align-items-center justify-content-center"
                >
                    <p className="px-3 fw-bolder pt-2 btn-tex">Target Completed</p>
                    <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default UserInfoCart;