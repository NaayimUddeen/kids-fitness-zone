import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivitiesChart.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ActivitiesChart = ({ chart, handleAddToCartClick }) => {
    const { picture, age, name, about1, Time_Required } = chart;
    // console.log(props);



    return (
        <div className='chart  '>
            <div className='col'>
                <div className='card'>
                    <img className='chart-im card-img-top' src={picture} alt=""></img>
                    <div className="chart-dat card-body">
                        <div className="chart-data card-title">
                            <h3>Activities Name: <span className='text-primary fw-bold'>{name}</span></h3>
                            <h5>Age 5 to {age}</h5>
                            <h5>{about1}</h5>
                            <h5>Time Required:<span className='text-primary fw-bold'>{Time_Required}</span> Mnt</h5>
                        </div>
                        <div className='d-grid'>
                            <button
                                onClick={() => handleAddToCartClick(chart)}
                                className="btn-car btn btn-primary w-4 d-flex align-items-center justify-content-center"
                            >
                                <p className="px-3 fw-bolder pt-2 btn-tex">Add to Card</p>
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesChart;