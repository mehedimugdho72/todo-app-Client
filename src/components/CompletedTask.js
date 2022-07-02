import React from 'react';

const CompletedTask = () => {
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <div className="overflow-x-auto">
                <h2 className='text-center text-3xl font-semibold my-3 text-green-600'>Completed Tasks</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Date</th>
                            <th>Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CompletedTask;