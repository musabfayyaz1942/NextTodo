
import React from 'react';
import Form from './components/Form'
import './globals.css'


const Page = () => {
  return (
    <>
    <div className='flex flex-col justify-center align-middle text-center'>
    <h1 className="text-4xl font-bold pb-24">TODO LIST APP</h1>
    <Form/>
    </div>
   
    </>

  );
}

export default Page;
