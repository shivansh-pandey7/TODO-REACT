
import { useState } from "react";
import React from "react";
import './NewTodoForm.css';


const NewTodoForm = (props) => {

    const [todoHandle, setTodoHandle] = useState('');

    const todoChangeHandler = (event) => {
        setTodoHandle(event.target.value);
        // console.log(event.target.value);
    }   

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(todoHandle){
            props.onNewTodoCreated(todoHandle);
            // console.log("in SUbmit");
            setTodoHandle('');

        }
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="newTodoForm">
                <div>
                    <label>Todo</label>
                </div>
                <input type="text" onChange={todoChangeHandler} value={todoHandle} />
                <button type="submit" >Add </button>
            </div>

        </form>
    );    
};

export default NewTodoForm;