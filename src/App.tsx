import React, { useState} from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.models'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  
  const todoAddHandler = (text: string) => {
    setTodos( prevTodo => [...prevTodo,
      { id: Math.random().toString(), text: text }
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler} />
      <NewToDo onAddTodo={todoAddHandler}  />
    </div>
  );
}

export default App;
