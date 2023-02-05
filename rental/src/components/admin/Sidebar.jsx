import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'
// https://github.com/codingwithmuhib/Car-Rantal-Dashboard/blob/main-source-code/src/routes/Router.js

function Sidebar() {
    const navLinks = [
        {
            path: "/admin/dashboard",
            display: "Dashboard",
        },
        {
            path: "/admin/bookings",
            display: "Booking",
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
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Sidebar