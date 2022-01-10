import React from "react";
import './DisplayEachTodo.css';

const DisplayEachTodo = (props) => {
    
    const removeTodo = () => {
        props.getRemoveTitle(props.item.id);
    }

    return (
        <div className="eachTodo centre">
            <p className="title">{props.item.td}</p>
            <button className="btn" onClick={removeTodo}>Delete</button>
        </div>
    );
};

export default DisplayEachTodo;