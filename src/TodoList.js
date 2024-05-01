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
    const editTask = (id, editTask) =>{
        setTask(tasks => tasks.map(
            task => task.id ===id ? {...task, task: editTask}: task))
    }
    const completeTask = (id) =>{
        setTask(tasks => tasks.map(
            task=> task.id ===id ?{...task, completed : true} : task
        ))
    }
    return(
        <div>
            <h3>TodoList</h3>
            <NewTodoForm addTask={addTask}/>
            {
            task.map(({id, task})=>
            <Todo 
            completed={false}
            key={id}
            id={id}
            task={task}
            remove={removeTask}
            edit={editTask}
            complete={completeTask}
            />
            )}
        </div>
    )
}

export default TodoList;