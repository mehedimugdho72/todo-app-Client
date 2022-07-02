import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import toast from 'react-hot-toast';

const Calendar = () => {

    const [selected, setSelected] = useState(new Date())
    const [taskInput, setTaskInput] = useState('')
    const [user] = useAuthState(auth)

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    const handleAddTask = () => {
        const date = footer.props.children[1]
        if (footer.props.children === 'Please pick a day.') {
            console.log("You hanvn't select any date");
            return toast.error("You hanvn't select any date")
        }
        const email = user.email

        const url = `http://localhost:5000/api/addingTodo`

        const allData = { date, email, taskInput }

        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Successfully Added Task")
                }
            })

    }

    // console.log(footer)
    // console.log(taskInput);

    return (
        <section className='flex justify-center items-center flex-col md:flex-row'>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
            <div className='space-y-2'>
                <form onClick={ (e) => {e.preventDefault()}} action="">
                    <input onChange={(e) => setTaskInput(e.target.value)} className='input input-bordered' type="text" placeholder='Add Your Task' required /> <br />
                    <button onClick={handleAddTask} className='bg-green-600 text-white px-5 py-1 rounded hover:scale-125 duration-300 ease-in-out'>Add</button>
                </form>
            </div>
        </section>
    );
};

export default Calendar;