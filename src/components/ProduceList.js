import React from "react";
import produceData from './produce.json'
import Produce from "./Produce";
import './ProduceList.css'

const ProduceList = () => {

    return (
        <div className="produce-list"> 
            <div className="sort-by">
                <h3>Sort By: </h3>
                <button value='category'>Category</button>
                <button value='default'>Default</button>
            </div>
            
            
            {
                produceData.map(produce => {
                    return <Produce data={produce} />
                })
            }
        </div>
    )
}

export default ProduceList;