import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Frame from './Frame'

const index = () => {
    return (
        <div className='px-5 pt-10 pb-20'>
            <div className="flex justify-between items-center">
                <p className='font-bold text-xl'>Pratinjau Wisata rekomendasi BandungVoyage:</p>
                <div className="flex gap-2 font-bold text-lg items-center justify-center rounded-full bg-accent bg-opacity-20 py-2 px-6 cursor-pointer">
                    <p>Lihat lainnya</p>
                    <FaArrowRight />
                </div>
            </div>
            <div className="flex justify-center items-center gap-7 mb-5">
                <Frame />
                <Frame />
                <Frame />
            </div>
        </div>
    )
}

export default index