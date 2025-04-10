import React from 'react';
import { HiMiniCurrencyDollar } from "react-icons/hi2";

import logo from '../../assets/logo.png'
const Navbar = () => {
    const coinClasses = 'border border-gray-300 px-4 flex items-center gap-1 py-3 rounded font-semibold';

    return (
        <>
            <div class=" bg-base-100 shadow-sm backdrop-blur-md">
                <div className="container navbar mx-auto">
                    <div class="flex-1">
                        <a class=""><img className='w-16' src={logo} alt="" /></a>
                    </div>
                    <div class="flex-none">
                        <ul class="menu menu-horizontal px-1 flex items-center">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Link</a></li>
                            <div className={coinClasses}>0 Coin
                                <HiMiniCurrencyDollar className='text-yellow-500' size={24} />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;