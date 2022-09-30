import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserInfoCart.css'
// import img from "../../img/user_profile_pic-removebg-preview.png"

const UserInfoCart = ({cart}) => {
    return (
        <div className="cart-contain">
            <div>
                <h1>this is cart: { }</h1>
                <p>{cart.length}</p>
            </div>
            {/* <div className=''>
                <img src={img} alt="" />
                <h3>Name :</h3>
            </div>
            <div className=''>
                <div>
                    <p ><small>kg</small></p>
                </div>
                <div>
                    <p>65</p>
                    <p>Weight</p>
                </div>

            </div> */}
        </div>
    );
};

export default UserInfoCart;