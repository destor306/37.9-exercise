import React, {useState} from "react";
import Todo from "./Todo";
import {v4 as uuid} from "uuid"
import NewTodoForm from "./NewTodoForm";


const TodoList = ()=>{

    const [task, setTask] = useState([]);

    const addTask = (newTask) =>{
        setTask(tasks => [...tasks, {...newTask, id: uuid()}])
    }
    const removeTask =(id) =>{
        setTask(tasks => tasks.filter(task=> task.id !== id));
    }
    return(
        <div>
            <h3>TodoList</h3>
            <NewTodoForm addTask={addTask}/>
            {
            task.map(({id, task})=>
            <Todo 
            key={id}
            id={id}
            task={task}
            remove={removeTask}
            />
            )}
        </div>
    )
}

export default TodoList;