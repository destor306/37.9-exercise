import React from "react";

const Todo = ({id, task, remove})=>{
    const handleRemove = e=>{
        remove(id)
    }
    return(
        <div>
            <div>
                {task}
            </div>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default Todo;