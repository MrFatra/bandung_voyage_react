import React, { useEffect, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import './Hero.css' // Hapus jika tidak digunakan lagi

const Hero = () => {
    const [hideScroll, setHideScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) { // Sesuaikan responsive dari device
                setHideScroll(true)
            } else {
                setHideScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Bersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="h-screen overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1613057263089-7a8c82f2825d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-fill"
            />
            <div className={`scroll-down transition-opacity duration-500 ${hideScroll ? 'opacity-0' : 'opacity-100'}`}>
                <div className="scroll-content flex gap-2 items-center rounded-full bg-black bg-opacity-50 p-2">
                    <FaArrowDown size={35} />
                    <p>Scroll kebawah untuk melanjutkan</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
