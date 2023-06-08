import React from 'react'

export default function Info(props) {
    return(
        <div className='bg-black info-size rounded border-red-main border-4'>
            <h1 className='xl:text-4xl sm:text-5xl text-white text-center pt-10 font-bold '>{props.header}</h1>
            <h1 className='xl:text-2xl sm:text-4xl text-white text-center ml-5 mr-5 mt-7'>{props.desc}</h1>
        </div>
    )
}