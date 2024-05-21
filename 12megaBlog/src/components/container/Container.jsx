import React from 'react'

export function Container({children}) {
    

    /* return (
        <div className='w-full max-w-7xl mx-auto px-4'>
            {children}
        </div>
    ) */ // both works same
    return <div className='w-full max-w-7xl mx-auto px-4'> {children} </div>; // both works same
}
