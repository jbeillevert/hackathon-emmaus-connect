import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../02.navigation/LoginContext';

const MenuDashboard = () => {

    const { loggedIn, setLoggedIn, logout } = useContext(LoginContext);

    const handleLogout = () => {
        logout();
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        } else {
            console.warn('User currently has no token');
        }
    }, [loggedIn]);

    const normalLink = 'py-3 pl-6 rounded-tl-lg rounded-bl-lg flex text-stone-200 translate-x-4'
    const activeLink = 'py-3 pl-6 rounded-tl-lg rounded-bl-lg flex bg-stone-200 text-teal-900 translate-x-4'

    return (
        <div className="flex justify-start h-screen top-0 left-0 bg-gradient-to-br from-teal-900 to-teal-700 w-[200px] fixed p-3">
            <div id="menudashboxcontent" className="flex flex-col h-full items-start justify-between">

                <div id='menudashboxcontent' className='flex flex-col h-full items-start justify-between'>
                    <div className=''>
                        <img src="../src/01.assets/logo.png" alt="logo Emmaus" className='scale-75' />

                        <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
                            <h4 className='font-semibold text-lg'>Simulateur</h4>
                        </NavLink>
                        <NavLink to="/dashboard/faq" className={({ isActive }) => isActive ? activeLink : normalLink}>
                            <h4 className='font-semibold text-lg'>Fonctionnement</h4>

                        </NavLink>
                    </div>
                <div className="linkContainer">
                    <div>
                        {loggedIn ? (
                            <NavLink to="dashboard/admin" className="py-3 pl-6 rounded-tl-lg rounded-bl-lg flex">
                                <h4 className="font-semibold text-lg text-stone-200">Admin</h4>
                            </NavLink>
                        ) : (
                            <NavLink to="dashboard/admin" className=" hidden py-3 pl-6 rounded-tl-lg rounded-bl-lg flex">
                                <h4 className="font-semibold text-lg text-stone-200">Admin</h4>
                            </NavLink>
                        )}
                    </div>

                    <div>
                        {loggedIn ? (
                            <button type="submit" className="py-3 pl-3 rounded-tl-lg rounded-bl-lg" onClick={handleLogout}>
                                <h4 className="font-semibold text-lg text-stone-200 hover:text-red-600 duration-200">Je me déconnecte</h4>
                            </button>
                        ) : (
                            <NavLink to="/dashboard/login">
                                <button className="py-3 pl-6 rounded-tl-lg rounded-bl-lg">
                                    <h4 className="font-semibold text-lg text-stone-200 hover:text-red-600 duration-200">Je me connecte</h4>
                                </button>
                            </NavLink>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDashboard;
