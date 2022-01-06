import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React from 'react';
import NewTodo from './components/NewTodo';
import DisplayTodo from './components/DisplayTodo';

function App() {

  const DUMMY_TODO = [];
  let idx = 0;
  //delete 
  const removeTodoTitle = (index) => {
    // let index = todosUpdated.indexOf(title);
    
    console.log(index);
    todosChanged((prevTodos) => {
      // let remove;
      // for(let i = 0; i < prevTodos.length; i++){
      //     if(prevTodos[i].id === index){
      //       remove = i;
      //       break;
      //     }
      // }
      // return prevTodos.splice(remove, 1);

      return prevTodos.filter(function(todo){
          return todo.id != index;
      });
    })
  };


  // let todos = [];
  const [todosUpdated, todosChanged] = useState(DUMMY_TODO);
  const updateTodos = (newTodo) => {
    
    todosChanged((prevTodos) => {
      return [{id:Math.random().toString(), td : newTodo}, ...prevTodos];
    });
    // console.log(todos);
    // console.log(todosChanged);
 };


  return (
  
    <div className="App center">
      
      <NewTodo onTodoUpdated={updateTodos}/>
      <DisplayTodo getRemoveTitle={removeTodoTitle} items={todosUpdated}  />
      
    </div>
  );
}

export default App;
