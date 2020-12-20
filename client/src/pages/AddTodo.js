import React, { useState } from 'react'
import axios from 'axios'
// import { useForm } from 'react-hook-form';

const AddTodo = () => {
    const [todo, setTodo] = useState('');
    
    const handleInput = (e) => {
        const { name, value } = e.target
        setTodo(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //send request
        await axios.post('/api/addTodo', { todo: todo })
        setTodo('')
    }
    
    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Create Todo Item</h3>
                <form>
                    <div className='form-group'>
                        <label htmlFor='text'>Text:</label>
                        <input name="todo" value={todo} onChange={handleInput} />
                    </div>
                    <div className='form-group'>
                        <button onClick={handleSubmit} className='form-group'>Add Todo</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTodo
