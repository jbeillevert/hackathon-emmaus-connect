import React from 'react';

const MenuDashboard = () => {
    return (
        <div className='h-screen bg-teal-950 w-[280px]'>
            <div id='menudashboxcontent' className='flex flex-col h-full justify-between py-10 pl-10'>
                <div className=''>
                    <div className='bg-stone-100 py-3 pl-6 rounded-tl-lg rounded-bl-lg'>
                        <h4 className='font-semibold text-lg text-teal-950'>Simulateur</h4>
                    </div>
                    <div className='py-3 pl-6 rounded-tl-lg rounded-bl-lg'>
                        <h4 className='font-semibold text-lg text-stone-200'>Questions / Reponses</h4>
                    </div>
                </div>

                <div>
                    <div className='py-3 pl-6 rounded-tl-lg rounded-bl-lg'>
                        <h4 className='font-semibold text-lg text-stone-200'>Admin</h4>
                    </div>
                    <div className='py-3 pl-6 rounded-tl-lg rounded-bl-lg'>
                        <h4 className='font-semibold text-lg text-stone-200'>Déconnexion</h4>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default MenuDashboard;