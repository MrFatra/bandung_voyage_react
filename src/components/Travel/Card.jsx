import React from 'react'
import './Travel.css'
import { FaClock, FaArrowRight } from 'react-icons/fa6'

const Card = () => {
    return (
        <div className="mt-5">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className='relative'>
                    <img
                        src="https://images.unsplash.com/photo-1596390261476-d2492f3e9695?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Tangkuban Perahu" />
                        <div className="flex items-center gap-2 bg-accent py-2 px-3 rounded-tl-xl absolute text-white bottom-0 right-0">
                            <p>Lihat selengkapnya</p>
                            <FaArrowRight size={15}/>
                        </div>
                </figure>
                <div className="flex flex-col gap-5 card-body py-4 px-5">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title font-bold mt-1">
                            Tangkuban Perahu
                        </h2>
                        <div className="badge flex gap-2 badge-accent bg-opacity-25 font-semibold items-center justify-center">
                            <FaClock size={12} />
                            <p className='mt-1'>1h lalu</p>
                        </div>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    {/* <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Card