import React, { useState } from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])
  // Functions
  const filterHandler = () => {

  }

  return (
    <div className="App">
      <header>
        <h1> Todo List </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;


