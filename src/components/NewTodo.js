import React from "react";
import NewTodoForm from "./NewTodoForm";
const NewTodo = (props) => {
    
    const newTodoHandler = (newTodo) => {
        // console.log(newTodo);
        props.onTodoUpdated(newTodo);
    };

    return (
        <div>
            <NewTodoForm onNewTodoCreated={newTodoHandler} />
        </div>
    );
};

export default NewTodo;