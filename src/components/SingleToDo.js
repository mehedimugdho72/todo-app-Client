import React from 'react';
import { Link } from 'react-router-dom'

const SingleToDo = ({ task }) => {

    const { date, taskInput, index, _id } = task

    return (
        <>
            <tr className="hover">
                <th>{index}</th>
                <td> <p><input type="radio" name="" id="" /></p> </td>
                <td>{date}</td>
                <td>{taskInput}</td>
                <td><Link to={`/singleToDo/${_id}`} className='bg-blue-600 text-white px-3 py-1'>Edit</Link></td>
            </tr>
        </>
    );
};

export default SingleToDo;