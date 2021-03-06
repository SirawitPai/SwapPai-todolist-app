import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Nodata from "../image/Nodata.png"
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>React TodoLise App</h1>
      <TodoForm onSubmit={addTodo} />
      {todos == 0 ? (
        <div><img
          src={Nodata}
          className="Nodata"
                  width="80%"
                  alt="movie"
                ></img>
          <h1>Oppps! No Data </h1>
        </div>
        
      ) : (
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      )}
      <button onClick={() => setTodos([])} className="deleteAll">
        deletAll
      </button>
    </>
  );
}
