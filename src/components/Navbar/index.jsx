import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ home = false }) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar bg-base-100 px-5 ${home ? 'fixed' : 'sticky top-0'} ${scroll || !home ? 'bg-white shadow-lg' : 'bg-transparent'} transition-all duration-200 z-10`}>
            <div className="navbar-start items-center">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <FaBars className='text-accent' size={20} />
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Beranda</a></li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Wisata
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.27 10.11l-5.32 5.32c-.39.39-1.02.39-1.41 0l-5.32-5.32c-.63-.63-.19-1.71.71-1.71h10.62c.89 0 1.34 1.08.72 1.71z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Paket Wisata</a></li>
                            </ul>
                        </li>
                        <li><a>Daftar</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-bold mt-1">BandungVoyage</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[1rem] gap-2 font-semibold">
                    <li><Link to={'/'}>Beranda</Link></li>
                    <li tabIndex="0" className="dropdown dropdown-hover">
                        <a className="justify-between">
                            Wisata
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.27 10.11l-5.32 5.32c-.39.39-1.02.39-1.41 0l-5.32-5.32c-.63-.63-.19-1.71.71-1.71h10.62c.89 0 1.34 1.08.72 1.71z" /></svg>
                        </a>
                        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><Link to='/destinations'>Paket Wisata</Link></li>
                        </ul>
                    </li>
                    <li><a>Tentang</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <Link to={'/register'} className='outline outline-2 outline-[#00582e] hover:bg-[#00582e] rounded-lg py-[.60rem] px-5 text-[1rem] bg-transparent text-[#00582e] font-bold hover:text-white transition-all'>Daftar</Link>
                <div className="btn px-6 text-[1rem] btn-accent rounded-[.6rem]">
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
