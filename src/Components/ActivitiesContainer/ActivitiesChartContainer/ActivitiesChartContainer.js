import React, { useEffect, useState } from 'react';
import './ActivitiesChartContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivitiesChart from './ActivitiesChart/ActivitiesChart';
// import { ReactDOM } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import UserInfoCart from './ActivitiesCart/UserInfoCart';



const ActivitiesChartContainer = () => {
    const [allChart, setChart] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    // console.log(allChart);
    const handleAddToCartClick = (chart) => {
        console.log(chart);
        const newCart = [...cart, chart];
        setCart(newCart);
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
                <div className="activities-cart-contain col-3 bg-info">
                        <UserInfoCart cart={cart}></UserInfoCart>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesChartContainer;