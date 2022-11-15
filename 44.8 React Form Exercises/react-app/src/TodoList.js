import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const INITIAL_STATE = [
    { id: uuidv4(), todo: 'feed the chickens' },
    { id: uuidv4(), todo: 'clean the litter' },
    { id: uuidv4(), todo: 'feed yourself' },
  ];
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>TODO LIST.</h1>
      <NewTodoForm addTodo={addTodo} />
      <div className="TodoList">
        {todos.map(({ id, todo }) => (
          <Todo id={id} todo={todo} key={id} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
