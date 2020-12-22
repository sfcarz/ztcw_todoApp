import axios from 'axios';

export async function signIn(username, password){
    // console.log(username, password);
    try {
        const result = await axios.post('/auth/signin', { username: username, password: password })
        return result.data
    } catch (error) {
        throw error
    }
}

export async function signUp(firstName, lastName, username, password) {
    try {
        const result = await axios.post('/auth/signup', { firstName: firstName, lastName: lastName, username: username, password: password })
        return result.data
    } catch (e) {
        throw e
    }
}

export async function getTodos(token) {
    // console.log(token);
    try {
        const result = await axios.get('/api/todo', { headers: { 'Authorization': token}})
        return result.data
    } catch (error) {
        throw error
    }
}

export async function deleteTodos(token, todoId) {
    try {
        const result = await axios.delete(`/api/todo/${todoId}`, { headers: { 'Authorization': token } })
        return result.data
    } catch (e) {
        throw e
    }
}

export async function updateTodos(token, todoId, todo) {
    try {
        const result = await axios.patch(`/api/todo/${todoId}`, { todo: todo }, { headers: { 'Authorization': token } })
        return result.data
    } catch (e) {
        throw e
    }
}

export async function addTodos(token, todo) {
    try {
        const result = await axios.post(`/api/todo`, { todo: todo }, { headers: { 'Authorization': token } })
        return result.data
    } catch (e) {
        throw e
    }
}