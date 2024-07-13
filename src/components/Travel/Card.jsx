import React from 'react'
import './Travel.css'
import { FaClock } from 'react-icons/fa6'

const Card = () => {
    return (
        <div className="mt-5">
            <div class="card bg-base-100 w-96 shadow-xl outline outline-1">
                <figure className='flex relative'>
                    <img
                        src="https://images.unsplash.com/photo-1596390261476-d2492f3e9695?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Tangkuban Perahu" />
                        <div className="absolute text-white bottom-0 right-0">Lihat selengkapnya</div>
                </figure>
                <div class="flex flex-col gap-5 card-body py-4 px-5">
                    <div className="flex justify-between items-center">
                        <h2 class="card-title font-bold mt-1">
                            Tangkuban Perahu
                        </h2>
                        <div class="badge flex gap-2 badge-accent bg-opacity-25 font-semibold items-center justify-center">
                            <FaClock size={12} />
                            <p className='mt-1'>1h lalu</p>
                        </div>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    {/* <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div>
                        <div class="badge badge-outline">Products</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Card