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

  return (
    <div className="App">
      <ToDoList items={todos} />
      <NewToDo onAddTodo={todoAddHandler}  />
    </div>
  );
}

export default App;
