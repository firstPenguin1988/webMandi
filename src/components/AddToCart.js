import React, {useState} from "react";

const AddToCart = () => {
    const [showAddButton, setShowAddButton] = useState(false);
    const onClick = () => setShowAddButton(!showAddButton);
    return (
        <div>
            <button onClick={onClick}>Add to Cart</button> 
                {showAddButton ? <AddButton /> : null}
        </div>
    );
}

const AddButton = () => {
    const [count, setCount] = useState(1);
    const add = () => setCount(count + 1);
    const remove = () => setCount(count - 1);
    
    if(count > 0) {
        return (
            <div>
               <button onClick={remove}>-</button>
                   {count}
               <button onClick={add}>+</button>       
            </div>
        );
    } else {
        return false;
    }
     
}

export default AddToCart;