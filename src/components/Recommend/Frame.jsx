import React from 'react'
import './Frame.css'

const Frame = () => {
    return (
        <div className="mt-5">
            <div className=''>
                <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='rounded-xl h-56'></iframe>
            </div>
        </div>
    )
}

export default Frame