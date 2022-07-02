import React from 'react';
import Calendar from './Calendar';
import ToDo from './ToDo';

const Home = () => {
    return (
        <section className='flex justify-center items-center flex-col'>
            <Calendar/>
            <ToDo/>
        </section>
    );
};

export default Home;