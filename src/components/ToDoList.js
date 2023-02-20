import React from "react"
// import components
import Todo from './Todo'


const ToDoList = ({ todos, setTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo} />
            ))}
        </div>
    )
}

export default ToDoList;