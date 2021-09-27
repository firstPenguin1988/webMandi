import React, {useState} from "react";
import produceData from './produce.json'
import Produce from "./Produce";
import './ProduceList.css'

const ProduceList = () => {
    const [selected, setSelected] = useState('default')
    const produceDataCopy = [...produceData]
    const produceDataByCategry = produceDataCopy.sort((a,b) => (a.category < b.category) ? -1 : 1)
    console.log(produceData);
    //console.log(produceDataById);
    console.log(produceDataByCategry);
    const handleClick = ({target}) => {
        setSelected(target.value) 
        console.log(selected);
    }

    const renderList = () => {
        if(selected === 'category') {
            return produceDataByCategry.map(produce => <Produce data={produce} />)
        } else if (selected === 'default') {
            return produceData.map(produce => <Produce data={produce} />)
        }   
    }
    //console.log(handleClick());
    
    return (
        <div className="produce-list"> 
            <div className="sort-by">
                <h3>Sort By: </h3>
                <button onClick={handleClick} value='category'>Category</button>
                <button onClick={handleClick} value='default'>Default</button>
            </div>
            
            
            {
                
                renderList() 
                             
            }
        </div>
    )
}

export default ProduceList;