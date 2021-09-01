import React from 'react'
import './TodoList.css';

interface ToDoListProps {
    items: {id: string, text: string}[]
    onDeleteTodo: (id: string) => void;
}


const ToDoList: React.FC<ToDoListProps> = ({ items, onDeleteTodo }) => {
    return (
        <ul>
            {items.map((todo) => {
               return(
                <li key={todo.id}>{todo.text}
                    <span>{todo.text}</span>
                    <button onClick={onDeleteTodo.bind(null, todo.id)}>
                        DELETE
                    </button>
                </li>
                
               ) 
            })}
        </ul>
    )
}


export default ToDoList