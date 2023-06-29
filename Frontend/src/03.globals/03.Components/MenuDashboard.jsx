import React from 'react';
import { NavLink } from "react-router-dom";


const MenuDashboard = () => {

    return (


        <div className='flex justify-start h-screen top-0 left-0 bg-gradient-to-br from-teal-900 to-teal-700
        w-[200px] fixed p-3 '>
            <div id='menudashboxcontent' className='flex flex-col h-full items-start justify-between'>
                <div className=''>
                    
                    <NavLink to="/" className='py-3 pl-6 rounded-tl-lg rounded-bl-lg flex'>
                        <h4 className='font-semibold text-lg text-stone-200'>Simulateur</h4>
                    </NavLink>
                    <NavLink to="/dashboard/faq" className='py-3 pl-6 rounded-tl-lg rounded-bl-lg flex'>
                        <h4 className='font-semibold text-lg text-stone-200'>Fonctionnement</h4>
                    </NavLink>
                </div>

                <div>
                    <NavLink to ="dashboard/login" className='py-3 pl-6 rounded-tl-lg rounded-bl-lg flex'>
                        <h4 className='font-semibold text-lg text-stone-200'>Admin</h4>
                    </NavLink>
                    <button className='py-3 pl-6 rounded-tl-lg rounded-bl-lg'>
                        <h4 className='font-semibold text-lg text-stone-200 hover:text-red-600 duration-200'>Déconnexion</h4>
                    </button>
                </div>

            </div>
            
        </div>
    );
};

export default MenuDashboard;