import React, { useState, useEffect } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import './metroList.css'
export default function metroList({ value: dataInp }) {

    const [obj, setObj] = useState('')
    const [reset, Setreset] = useState(false)
    const [arrowDown, setArrowDown] = useState(false)
    const [clas, SetClas] = useState(true)


    useEffect(() => {
        setObj(dataInp)
    }, [dataInp])


    const handleSubmit = bId => {
        localStorage.setItem("selectedmetroId", bId)
        SetClas(false)
        setArrowDown(true)
    }


    const handleReset = (e) => {
        if (clas === false) {
            Setreset(true)
            SetClas(true)
            setArrowDown(false)
        }
        localStorage.removeItem("selectedmetroId")
    }


    const renderFunction = () => {
        return dataInp.map((metro, idx) => {
            // let bId = metro._id
            return (
                <div key={idx} className="card mt-5 metrolist">
                    <div class="row ml-3">
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Brand</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">From</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">To</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Price</div>

                        <div class="w-100 d-none d-md-block"></div>

                        {console.log(metro.seatArray)}
                        <div class="col-6 col-sm-3 mb-4">{metro.companyName}</div>
                        <div class="col-6 col-sm-3 mb-4">{metro.startCity}</div>
                        <div class="col-6 col-sm-3 mb-4">{metro.destination}</div>
                        <div class="col-6 col-sm-3 mb-4">{metro.pricePerSeat}</div>
                        <div class="col-6 col-sm-4 mb-2 ml-0">
                            <button className={clas ? "btn btn-primary btn-md" : "btn btn-primary btn-md disabled"} onClick={(bId) => { handleSubmit(metro._id) }} >Book Now</button>
                        </div>
                        <div class="col-6 col-sm-4 mb-2 ml-0">
                            <span className={reset ? "badge badge-danger ml-5" : "disabled"} onClick={e => handleReset(e)}>Reset</span>
                        </div>
                    </div>
                </div >
            )
        })

    }


    return (
        <div className="">
            {renderFunction()}
            <div className={arrowDown ? "activeArrow" : "nonActive"}>
                <FaAngleDoubleDown />
            </div>
        </div>

    )
}
