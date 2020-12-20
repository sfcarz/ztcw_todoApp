import React, { useEffect } from 'react';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../app/todoSlice'

export default function TodoList({ setTodos, filteredTodos }) {
  // console.log('Inside the todoList.js', todos);
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user);
  const { todos } = useSelector(state => state.todos);

  useEffect(() => {
    if (!token) {
      return
    }
    dispatch(fetchTodos(token))
  }, [dispatch, token]);

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              // setTodos={setTodos}
              // todos={todos}
              // text={todo.todo}
              todo={todo}
              key={todo._id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
