import React, { useState } from 'react';

const Estimation = ({estimateOpen, setEstimateOpen}) => {

    const estimateCloseHandler = () => {
        setEstimateOpen(!estimateOpen);
    }
    return (
        estimateOpen && 
            (<div  className='flex flex-col justify-center gap-10 items-center -translate-x-2/4 -translate-y-2/4 z-10 shadow-md bg-white rounded-md absolute inset-y-1/2 inset-x-2/4 w-3/12 h-60 p-10'>
            <h2 className='sukui-h2'>Estimation :</h2>
            <h3 className='sukui-h3'> CATEGORIE D</h3>
            <h6>Prix suggéré : de € à €</h6>
            <a href="" className='absolute bottom-3 right-3 text-teal-700 text-xs hover:text-teal-400'>Télécharger en pdf</a>
            <p className='sukui-p absolute top-3 right-4 hover: cursor-pointer hover:text-neutral-950' onClick={estimateCloseHandler}>X</p>
        </div>)
    );
};

export default Estimation;