import React from "react";

const Box = ({id,width, height, backgroundColor, handleRemove}) =>{

    const remove =e =>{
        handleRemove(id);
    }
    return(
        <div>
            <div 
            style=
            {{
                width: `${width}em`, 
                height: `${height}em`, 
                backgroundColor}}/>
            <button onClick={remove}>Remove</button>
        </div>
    )
}

export default Box;