import React, {useState} from "react";

const Todo = ({id, task, complete, remove, edit})=>{
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState("");
    const [completed, setCompleted] = useState(false);
    const handleEditToggle =() =>{
        setEditing(!editing);
        setEditedTask(task);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        edit(id, editedTask);
        setEditing(false);
    }
    const handleRemove = e=>{
        remove(id)
    }

    const handleInputChange =e =>{
        setEditedTask(e.target.value);
    }

    const handleMarkCompleted = e =>{
        setCompleted(!completed)
    }

    return(
        <div style={{textDecoration : completed ? "line-through" : "none"}}>

            {editing ? (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={editedTask}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleEditToggle}>Cancel</button>
            </form>) : 
            (<div>
                <div>
                    {task}
                </div>
                <button onClick={handleEditToggle}>Edit</button>
                <button onClick={handleRemove}>Remove</button>
                <button onClick={handleMarkCompleted}>Mark as completed</button>
            </div>)}
            
        </div>
    )
}

export default Todo;