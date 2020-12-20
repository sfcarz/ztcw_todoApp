import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../app/todoSlice'
// import axios from 'axios'
import style from './Todo.module.css'

export default function Todo({ todo }) {

  const [txt, setTxt] = useState('')
  const [ isShown, setIsShown ] = useState(false)
  
  const handleChange = (e) => {
    setTxt(e.target.value)
  }

  // const handleClick = (e) => {
  //   setClick(!click)
  // }

  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user);
  // const { todos } = useSelector(state => state.todos);

  const deleteHandler = () => {
    // setTodos(todos.filter((el) => el.id !== todo.id))
    // console.log('deleteHandler in Todo.js', todo);
    dispatch(deleteTodo(token, todo._id));
  };

  const completeHandler = () => {
    // setTodos(todos.map((item) => {
    //   if (item.id === todo.id) {
    //     return {
    //       ...item, completed: !item.completed
    //     }
    //   }
    //   return item
    // }))
    dispatch(updateTodo(token, todo._id, txt))
    setTxt('')
    // setClick(!click)
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   //send request
  //   await axios.post('/api/addTodo', { todos: todos })
  //   setTodos('')
  // }

  return (
    // <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className={style.todo}>
    //   {isShown ? <input value={txt} onChange={handleChange} /> :
    //   <li>
    //     {todo.todo}
    //   </li>
    //   }

    <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
    <div className='todo'>
        {isShown ? <input value={txt} onChange={handleChange} /> :
      <li>
        {todo.todo}
      </li>
      }
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
