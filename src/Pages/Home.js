import React from 'react'
import AddNewTodoForm from '../Components/AddNewTodoForm'
import TodoList from '../Components/TodoList'

function Home() {
    return (
        <div className='my-5' style={{ minHeight: "73vh" }}>
            <div className='row m-auto justify-content-center'>
                <button type="button" className='btn btn-primary col-auto mx-2'>Add New Todo</button>
                <button type="button" className='btn btn-primary col-auto mx-2'>Search</button>
            </div>
            <AddNewTodoForm />
            <TodoList />
        </div>
    )
}

export default Home