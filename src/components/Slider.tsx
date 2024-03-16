import Image from 'next/image'
import React from 'react'

function Slider() {
    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
            {/* Text Container */}
            <div className='h-1/2'>
                <h1 className=''>Test</h1>
                <button className=''>Order</button>
            </div>

            {/* Image Container */}
            <div className='w-full h-1/2 relative'>
                <Image src="/slide1.png" alt='' fill className='object-cover'/>
            </div>
        </div>
    )
}

export default Slider