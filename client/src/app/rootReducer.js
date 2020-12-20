import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice'
import todoReducer from './todoSlice'

const rootReducer = combineReducers({
    user: userReducer,
    todos: todoReducer,
})

export default rootReducer;