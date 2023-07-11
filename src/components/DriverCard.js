import React from 'react'

export default function DriverCard({name,rating,img,car}) {
    return (
        <div className="DriverCard-container">
            <img className="picture" src={img}/>
            <div className="info">
                <h2>{name}</h2>
                <h2>{rating}</h2>
                <span>{car.model}</span>
                <span>{car.licensePlate}</span>
            </div>
        </div>
    )
}