import { createSlice } from '@reduxjs/toolkit';
import { getTodos, deleteTodos, updateTodos, addTodos } from '../api/todoApi'

const initialState = {
  todos: [],
  loading: false,
  error: null,
}

const todo = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodoSuccess(state, action) {
      state.todos.push(action.payload)
      state.loading = false
      state.error = null
      // console.log('this is state todoSLice', state);
      // console.log('This is action todoSLice', action);
    },
    getTodosLoading(state, action) {
      state.loading = true
        state.error = null
    },
    getTodosError(state, action) {
      state.loading = false
      // state.error = action.payload
    },
    getTodosSuccess(state, action) {
      state.loading = false
      state.error = null
      state.todos = action.payload
    },
    deleteTodoSuccess(state, action) {
      state.loading = false
      state.error = null
      const array = state.todos;
      const newArray = array.filter((todo) => todo._id !== action.payload)
      state.todos = newArray
    },
    updateTodoSuccess(state, action) {
      console.log('updateTodoSuccess', action);
      state.loading = false
      state.error = null
      const array = state.todos;
      const newArray = array.map((todo) => {
        if (todo._id === action.payload._id) {
          return action.payload
        } else {
          return todo
        }
      })
      state.todos = newArray
    }
  }
})

export const {
  addTodoSuccess,
  getTodosLoading,
  getTodosError,
  getTodosSuccess,
  deleteTodoSuccess,
  updateTodoSuccess} = todo.actions

export default todo.reducer

export const fetchTodos = (token) => async (dispatch) => {
  try {
    dispatch(getTodosLoading())
    const result = await getTodos(token)
    dispatch(getTodosSuccess(result))
  } catch (e) {
    dispatch(getTodosError(e))
  }
}

export const deleteTodo = (token, todoId) => async (dispatch) => {
  try {
    dispatch(getTodosLoading())
    const result = await deleteTodos(token, todoId)
    if (result.deletedCount === 1) {
      dispatch(deleteTodoSuccess(todoId))
    } else {
      dispatch(getTodosError('Unable to Delete'))
    }
    // dispatch(getTodosSuccess(result))
  } catch (e) {
    dispatch(getTodosError(e))
  }
}

export const updateTodo = (token, todoId, todo) => async (dispatch) => {
  try {
    dispatch(getTodosLoading())
    const result = await updateTodos(token, todoId, todo)
    if (result) {
      console.log('From todoSlice', result);
      dispatch(updateTodoSuccess(result))
    } else {
      dispatch(getTodosError('Failed to update'))
    }
  } catch (e) {
    dispatch(getTodosError(e))
  }
}

export const addTodo = (token, todo) => async (dispatch) => {
  try {
    dispatch(getTodosLoading())
    const result = await addTodos(token, todo)
    dispatch(addTodoSuccess(result))
  } catch (e) {
    dispatch(getTodosError(e))
  }
}
