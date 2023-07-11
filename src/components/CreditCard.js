import React from 'react'

function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) {
    const card = {
        bgcolor: `${bgcolor}`,
        color: `${color}`
    }
    return (
        <div className="CreditCard-container" style={card}>
    
     
     <div>
        <h2>{type}</h2>
        <h2>{number}</h2>
        <span>{expirartionMonth}/{expirationYear}</span>
        <span>{bank}</span>
        <h2>{owner}</h2>
     </div>
     </div>
    
    )
}