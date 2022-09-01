import TodoList from './Todo-list'
import TodoCreate from './Todo-create'
import { useState } from 'react'

const Todo = () => {

    const [getTodos, setTodos] = useState([
        {id: 1 , title: 'Eat'},
        {id: 2 , title: 'Sleep'},
        {id: 3 , title: 'Code'}
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos);
    }

    return (
        <div>
            <h3>Todo List</h3>
                <br />
                    <TodoCreate onCreateTodo={eventCreateTodo}/>
                <br />
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo