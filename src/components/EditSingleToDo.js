import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';

const EditSingleToDo = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleEditTask = e => {
        e.preventDefault()
        const taskInput = e.target.editedText.value;
        console.log(taskInput);

        fetch(`http://localhost:5000/api/editTask/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ taskInput })
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.matchedCount > 0) {
                toast.success("Successfully Edited Your Task", {id: 'success'})
                navigate('/')
            }
        })

        e.target.reset()
    }

    console.log(id);

    return (
        <div className='min-h-screen flex justify-center items-center flex-col space-y-2'>
            <form onSubmit={handleEditTask} className='space-y-2'>
                <input name='editedText' type="text" className='input input-bordered w-full' /> <br />
                <input className='bg-blue-600 text-white px-3 py-1 font-bold cursor-pointer' type='submit' value='Confirm' />
            </form>
        </div>
    );
};

export default EditSingleToDo;