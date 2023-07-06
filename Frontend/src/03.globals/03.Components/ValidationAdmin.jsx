import React, { useState } from 'react';

function ValidationAdmin({ validationOpen, setValidationOpen }) {

    const validationCloseHandler = () => {
        setValidationOpen(!validationOpen);
    }
    return (
        validationOpen && 
            (<div  className=' -translate-x-2/4 -translate-y-2/4 z-10 shadow-md bg-white rounded-md absolute inset-y-2/4 gap-6 flex flex-col justify-center inset-x-2/4 w-[600px] h-[400px] p-10'>
                <div className='flex flex-col gap-2 items-center font-semibold'>
                    <p className='sukui-p'>Vos modifications ont bien été enregistrées.</p>
                </div>
            <p className='sukui-p absolute top-3 right-4 hover: cursor-pointer hover:text-neutral-950' onClick={validationCloseHandler}>X</p>
        </div>)
    );
}

export default ValidationAdmin;