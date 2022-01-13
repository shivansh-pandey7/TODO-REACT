import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { addTodo, deleteTodo } from './redux/Todo/actions'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const mapToStateProps = state => {
    return {
      todo : state.todoReducer.todo
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  }
}
 

function App(props) {
  const [input, setInput] = useState('');
 
  const add = () => {   
    if(input){
      props.addTodo({
        title : input,
        id : Date.now()
      });
      console.log(props);
      setInput(''); 
    }
  }

  const deleteItem = (id) => {
      props.deleteTodo(id)
  }

  return (
    <div className="App">
      
      <div className='app_container'>   
      <div className='app_todoContainer'>
          <div className='input'>
          <input type='text' value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={add}>Add!</button>
          </div>
        {props.todo.map(item => <TodoItem data={props} key={item.id} deleteItem={deleteItem} title={item.title} id={item.id} />)}
      </div>
      </div>
    </div>
  );
}

export default connect(mapToStateProps, mapDispatchToProps)(App);
