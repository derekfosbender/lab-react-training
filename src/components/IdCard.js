import React from 'react'

export default function IdCard({lastName,firstName,gender,height,birth,picture}) {
    return (
        <div className="IdCard">
            <img className="picture" src={picture}/>
            <h2>First Name:{firstName}</h2>
            <h2>Last Name:{lastName}</h2>
            <h2>Gender:{gender}</h2>
            <h2>Height:{height}</h2>
            <h2>Birthdate: {birth}</h2>
        </div>
    )
}