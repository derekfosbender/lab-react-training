import React from 'react'

export default function Random({min,max}) {
    const randomNum = Math.floor(Math.random()*(max-min)) + min
    return (
        <div className="randomNum">
            <h1>Random value between: {min} and {max}: {randomNum}</h1>
        </div>
    )
}