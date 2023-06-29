import React, { useState } from 'react';

const Estimation = ({estimateOpen, setEstimateOpen, brand, model, resultAlgo}) => {

    const estimateCloseHandler = () => {
        setEstimateOpen(!estimateOpen);
    }
    return (
        estimateOpen && 
            (<div  className=' -translate-x-2/4 -translate-y-2/4 z-10 shadow-md bg-white rounded-md absolute inset-y-1/4 gap-6 flex flex-col justify-center inset-x-2/4 w-[600px] h-72 p-10'>
                <div>
                    <p className='sukui-p'>Estimation :</p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='sukui-h4'>{brand} {model}</h4>
                    <h3 className='sukui-h3'>{resultAlgo}</h3>
                    {/* <p className='sukui-p'>Prix suggéré : de € à €</p> */}
                </div>
                <div>
                    <a href="" className=' text-teal-700 text-sm border-b border-solid hover:text-teal-400'>Télécharger en pdf</a>
                </div>
            <p className='sukui-p absolute top-3 right-4 hover: cursor-pointer hover:text-neutral-950' onClick={estimateCloseHandler}>X</p>
        </div>)
    );
};

export default Estimation;