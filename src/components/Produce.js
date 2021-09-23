import React from "react";
import AddToCart from "./AddToCart";
import './Produce.css'

const Produce = (data) => {
    const produceData = data.data;
    
    return (
        <>
            <div className="produce-item">
                <img src={produceData.url} />
                <h4>{produceData.name} 500 g</h4>
                <h4>MRP: $ {produceData.price}</h4>
                {
                (produceData.available===1 ) ? <AddToCart /> : <h3>UNAVAILABLE</h3>
                }
                
            </div>
        </>
    );
}

export default Produce;