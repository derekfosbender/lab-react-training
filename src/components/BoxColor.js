import React from 'react'

export default function BoxColor({r,g,b}) {
    const style = {
    background: `rgb(${r},${g},${b})`,
    width: "500px",
    height: "100px"
    }
    return (
        <div style={style}>
        </div>
    )
}