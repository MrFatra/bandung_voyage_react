import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`navbar bg-base-100 px-5 fixed ${scroll ? 'bg-white shadow-lg' : 'bg-transparent'} transition-all duration-200 z-10`}>
            <div className="navbar-start items-center">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <FaBars className='text-accent' size={20} />
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg> */}
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Beranda</a></li>
                        <li>
                            <a>Wisata</a>
                            <ul className="p-2">
                                <li><a>Paket Wisata</a></li>
                            </ul>
                        </li>
                        <li><a>Daftar</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <a className="text-2xl font-bold mt-1">BandungVoyage</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[1rem] gap-2 font-semibold">
                    <li><a>Beranda</a></li>
                    <li>
                        <div className="dropdown dropdown-hover dropdown-bottom">
                            <div className="">
                                <a>Wisata</a>
                            </div>
                            <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Paket Wisata</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a>Tentang</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <a href="" className="outline outline-2 outline-[#00582e] hover:bg-[#00582e] rounded-lg py-[.60rem] px-5 text-[1rem] bg-transparent text-[#00582e] font-bold hover:text-white transition-all">Daftar</a>
                <div className="btn px-6 text-[1rem] btn-accent rounded-[.6rem]">
                    <a href="">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar