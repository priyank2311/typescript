import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';
//import TodoList from './TodoList';

function Todo({ todos, completeTodo }) {
        const [edit, setEdit] = useState({
            id: null,
            value: ''
        });

        return todos.map((todo, index) => (
            <div
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
            >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine className='delete-icon' />
                    <TiEdit className='edit-icon' />
                </div>

            </div>
        ))
    }

export default Todo;
