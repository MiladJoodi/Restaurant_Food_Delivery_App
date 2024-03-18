import React from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[]
}

function Price({ price, id, options }: Props) {
    return (
        <div>
            <h2>${price.toFixed(2)}</h2>
            {/* Options Container */}
            <div className=''>
                {options?.map(option => (
                    <button key={option.title}>{option.title}</button>
                ))}
            </div>
            {/* Quantity and btn container */}
            <div className=''>
                {/* Quantity */}
                <div className=''>
                    <span>Quantity</span>
                    <div className=''>
                        <button>{'<'}</button>
                        <span>1</span>
                        <button>{'>'}</button>
                    </div>
                </div>
                {/* Cart Button */}
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Price