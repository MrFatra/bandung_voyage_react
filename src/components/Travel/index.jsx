import React from 'react'
import Card from '../Card'
import { FaArrowRight } from 'react-icons/fa6'

const Travel = () => {
    return (
        <div className='px-5 py-10 bg-[#e0e0e0]'>
            <div className="flex justify-between items-center">
                <p className='font-bold text-xl'>Wisata yang mungkin Anda sukai:</p>
                <div className="flex gap-2 font-bold text-lg items-center justify-center rounded-full bg-accent bg-opacity-20 py-2 px-6 cursor-pointer">
                    <p>Lihat lainnya</p>
                    <FaArrowRight />
                </div>
            </div>
            <div className="flex justify-center items-center gap-7 mb-5">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Travel