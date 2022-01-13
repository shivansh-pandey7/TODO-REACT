import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
    const deleteItem = () => {
        console.log('PrintingProps')
        console.log(props);
        props.data.deleteTodo(props.id);
    
    }
    return (
        <div className='todoItem'>
            <p>{props.title}</p>
            <button onClick={(deleteItem)}>Delete</button>
        </div>
    )
}

export default TodoItem
