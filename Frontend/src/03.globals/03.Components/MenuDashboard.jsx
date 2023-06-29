import React from 'react';
import { NavLink } from "react-router-dom";


const MenuDashboard = () => {

    return (


        <div className='h-screen bg-gradient-to-br from-teal-900 to-teal-700
        w-[280px]'>
            <div id='menudashboxcontent' className='flex flex-col h-full justify-between py-10 pl-10'>
                <div className=''>
                    
                    <NavLink to="/dashboard/simulator" className='py-3 pl-6 rounded-tl-lg rounded-bl-lg flex'>
                        <h4 className='font-semibold text-lg text-stone-200'>Simulateur</h4>
                    </NavLink>
                    <NavLink to="/dashboard/faq" className='py-3 pl-6 rounded-tl-lg rounded-bl-lg flex'>
                        <h4 className='font-semibold text-lg text-stone-200'>Questions / Reponses</h4>
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