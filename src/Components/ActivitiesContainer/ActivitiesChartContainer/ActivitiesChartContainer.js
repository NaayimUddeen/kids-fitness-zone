import React, { useEffect, useState } from 'react';
import './ActivitiesChartContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivitiesChart from './ActivitiesChart/ActivitiesChart';
import UserInfoCart from './ActivitiesCart/UserInfoCart';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'




const ActivitiesChartContainer = ({ newCart, chart }) => {
    const [allChart, setChart] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setChart(data))
        // console.log(allChart);

    }, [])
    
    const handleAddToCartClick = (chart) => {
        const newCart = [...cart, chart];
        setCart(newCart);
        console.log(newCart);
    };
    return (
        <div className='container'>
            <div className=" activities-contain row">
                <div className="activities-chart-contain col-9 ">
                    <div className='row row-cols-1 row-cols-md-2 row-cols-sm-1 g-4 '>
                        {
                            allChart.map(chart => <ActivitiesChart
                                key={chart.id}
                                chart={chart}
                                handleAddToCartClick={handleAddToCartClick}
                            ></ActivitiesChart>)
                        }
                    </div>
                </div>
                {/* cart  */}
                <div className="activities-cart-container col-3 bg-info">
                    <UserInfoCart
                        newCart={newCart}
                        chart={chart}
                    ></UserInfoCart>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesChartContainer;