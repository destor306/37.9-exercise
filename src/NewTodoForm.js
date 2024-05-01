import React, { useState } from "react";

const NewTodoForm = ({addTask}) =>{
    const INITIAL_STATE = {
        task: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(data =>({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit =e =>{
        e.preventDefault();
        addTask({...formData})
        setFormData(INITIAL_STATE);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input 
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            />
            <button>Add Task</button>
        </form>

    )

}

export default NewTodoForm;