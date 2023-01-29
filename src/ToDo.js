import React from 'react';
import ToDoList from './ToDoList';

const ToDo = ({todo, toggle}) => {

    const handleClick = (event) => {
        event.preventDefault();
        toggle(event.currentTarget.id);
    }
    return (
        <div className={ todo.done ? "complete" : ""} onClick={handleClick} id={todo.id}>
            {todo.task}
        </div>
    )
}

export default ToDo;