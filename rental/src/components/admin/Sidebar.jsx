import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { RiLogoutBoxFill, BiLogOutCircle } from 'react-icons/all';

import './style.css'
// https://github.com/codingwithmuhib/Car-Rantal-Dashboard/blob/main-source-code/src/routes/Router.js

function Sidebar() {
    const { currentUser, logout } = useContext(AuthContext)
    const navLinks = [
        {
            path: "/admin/dashboard",
            display: "Dashboard",
        },
        {
            path: "/admin/serving",
            display: "Serving",
        },
        {
            path: "/admin/users",
            display: "Users",
        },
        {
            path: "/admin/products",
            display: "Products",
        },
    ];

    return (
        <div className="sidebar bg-purple-700 h-screen p-4  shadow-sm">
            <div className="sidebar__top mt-4 mx-4">
                <h2 className='text-2xl font-bold text-white'>
                    ABC T&T
                </h2>
            </div>

            <div className="sidebar__content w-full">
                <div className=" mx-4 w-full">
                    <ul className="nav__list w-full font-semibold text-gray-900">
                        {navLinks.map((item, index) => (
                            <li className="nav__item mx-2" key={index}>
                                <NavLink
                                    to={item.path}
                                    className={(navClass) =>
                                        navClass.isActive ? "nav__active nav__link" : "nav__link"
                                    }
                                >
                                    {item.display}
                                </NavLink>
                            </li>
                        ))}
                        {
                            currentUser && <li onClick={logout} className='flex space-x-1 items-center '>

                                <BiLogOutCircle color='white' size='45' className='hover:text-gray-400' />
                                <p className='cursor-pointer text-sm text-white hover:text-gray-300'>Logout</p>
                            </li>
                        }
                    </ul>

                </div>


            </div>
        </div>
    )
}

export default Sidebar