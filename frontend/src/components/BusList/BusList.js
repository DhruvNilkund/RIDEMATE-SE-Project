// Importing necessary React components and styles
import React, { useState, useEffect } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import './busList.css';

// Functional component for displaying a list of buses
export default function BusList({ value: dataInp }) {

    // State variables for managing component state
    const [obj, setObj] = useState('');
    const [reset, Setreset] = useState(false);
    const [arrowDown, setArrowDown] = useState(false);
    const [clas, SetClas] = useState(true);

    // useEffect to update 'obj' state when 'dataInp' prop changes
    useEffect(() => {
        setObj(dataInp);
    }, [dataInp]);

    // Function to handle form submission and update local storage
    const handleSubmit = bId => {
        localStorage.setItem("selectedBusId", bId);
        SetClas(false);
        setArrowDown(true);
    };

    // Function to handle reset button click and clear local storage
    const handleReset = (e) => {
        if (clas === false) {
            Setreset(true);
            SetClas(true);
            setArrowDown(false);
        }
        localStorage.removeItem("selectedBusId");
    };

    // Function to render the list of buses
    const renderFunction = () => {
        return dataInp.map((bus, idx) => {
            return (
                <div key={idx} className="card mt-5 buslist">
                    <div class="row ml-3">
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Brand</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">From</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">To</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Price</div>

                        <div class="w-100 d-none d-md-block"></div>

                        <div class="col-6 col-sm-3 mb-4">{bus.companyName}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.startCity}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.destination}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.pricePerSeat}</div>
                        <div class="col-6 col-sm-4 mb-2 ml-0">
                            <button className={clas ? "btn btn-primary btn-md" : "btn btn-primary btn-md disabled"} onClick={() => { handleSubmit(bus._id) }} >Book Now</button>
                        </div>
                        <div class="col-6 col-sm-4 mb-2 ml-0">
                            <span className={reset ? "badge badge-danger ml-5" : "disabled"} onClick={e => handleReset(e)}>Reset</span>
                        </div>
                    </div>
                </div>
            );
        });
    };

    // Main component rendering
    return (
        <div className="">
            {renderFunction()}
            <div className={arrowDown ? "activeArrow" : "nonActive"}>
                <FaAngleDoubleDown />
            </div>
        </div>
    );
}
