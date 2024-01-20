import React from 'react'

function AddNewTodoForm() {
    return (
        <div className='my-4'>
            <div className="card mx-auto px-2 text-primary text-center" style={{ width: "70%", border: "none" }}>
                <div className="card-body">
                    <form className="row gx-2 justify-content-center">
                        <div className="col-5">
                            <label for="newTodoItem" className="visually-hidden">New Todo</label>
                            <input type="text" className="form-control" id="newTodoItem" placeholder="Add New Todo" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3 px-4">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default AddNewTodoForm