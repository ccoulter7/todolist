import React from "react"
// import components
import Todo from './Todo'


const ToDoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredTodos.map(todo => (
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