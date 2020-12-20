import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../app/todoSlice';

const Form = ({ setInputText, inputText, todoss, setTodos, setStatus }) => {
  
  const [values, setValues] = useState({ todo: '', status: '' });
  const handleChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    })
  }

  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user)

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(token, values.todo));

    setValues({...values, todo: '', status: '' })

  };

  return (
    <div>
      <form>
        <input name='todo' value={values.todo} onChange={handleChange} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div name='status' className="select">
          <select value={values.status} onChange={handleChange} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
  </div>
  );
}

export default Form;