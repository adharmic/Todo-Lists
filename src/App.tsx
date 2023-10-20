import React, {useState} from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoModel } from './models/TodoModel';

export const App = () => {

  const [todos, setTodos] = useState([
      new TodoModel(1, 'Feed cats', 'User One'),
      new TodoModel(2, 'Water plants', 'User Two'),
      new TodoModel(3, 'Make dinner', 'User One'),
    ],
  );

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodo: TodoModel = new TodoModel(rowNumber, description, assigned);
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
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
