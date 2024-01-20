import React from 'react';
import "../Styles/todoListStyles.css";

function TodoList() {
    return (
        <div className='text-center text-primary'>
            <h5>Todos</h5>
            <hr />
            <ul className='mx-4 p-2 mt-3'>
                <li className='card bg-primary text-white mx-auto mt-4' style={{ width: "60%" }}>
                    <div className='row p-2'>
                        <p className='col-8 my-0 py-2 px-4 text-start'>Buy Milk</p>
                        <div className='col-4'>
                            <button type="button" className='btn btn-success mx-1'>Complete</button>
                            <button type="button" className='btn btn-secondary mx-1'>Edit</button>
                            <button type='button' className='btn btn-danger mx-1'>Delete</button>
                        </div>
                    </div>
                </li>
                <li className='card bg-primary text-white mx-auto mt-4' style={{ width: "60%" }}>
                    <div className='row p-2'>
                        <p className='col-8 my-0 py-2 px-4 text-start'>Buy Bread</p>
                        <div className='col-4'>
                            <button type="button" className='btn btn-success mx-1'>Complete</button>
                            <button type="button" className='btn btn-secondary mx-1'>Edit</button>
                            <button type='button' className='btn btn-danger mx-1'>Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TodoList