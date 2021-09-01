import React from 'react'

interface ToDoListProps {
    items: {id: string, text: string}[]
}


const ToDoList: React.FC<ToDoListProps> = ({ items }) => {
    return (
        <ul>
            {items.map((todo) => {
               return(
                <li key={todo.id}>{todo.text}</li>
               ) 
            })}
        </ul>
    )
}


export default ToDoList