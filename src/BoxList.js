import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import {v4 as uuid} from "uuid"

const BoxList = ()=>{
    
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) =>{
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    const removeBox = (id) =>{
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }
    return(
        <div>
            <h3>Boxes!</h3>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({id, width, height, backgroundColor}) => 
            <Box 
            id ={id}
            key={id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            handleRemove={removeBox}
            />)}
            </div>
        </div>
    )
}

export default BoxList;