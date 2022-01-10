import React from "react";
import DisplayEachTodo from "./DisplayEachTodo";
const DisplayTodo = (props) => {
    
    const removeTodoTitle = (index) => {
        props.getRemoveTitle(index);
    };

    return (
        <div>
            
            {props.items.map((todo) =>(
                
                <DisplayEachTodo getRemoveTitle={removeTodoTitle} key={todo.id} item={todo}/>
            ))}
        </div>
    );
}

export default DisplayTodo;