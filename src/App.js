import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
      {rowNum: 1, rowDesc: 'Feed cats', rowAssigned: 'User One'},
      {rowNum: 2, rowDesc: 'Water plants', rowAssigned: 'User Two'},
      {rowNum: 3, rowDesc: 'Make dinner', rowAssigned: 'User One'}
    ],
  );

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNum + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodo = {rowNum: rowNumber, rowDesc: description, rowAssigned: assigned};
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNum !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  } 

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your To-Dos
        </div>

        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button 
            className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
              {showAddTodoForm ? 'Close New To-Do' : 'New To-Do'}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
        </div>
      </div>
    </div>
  );
}
export default App;
