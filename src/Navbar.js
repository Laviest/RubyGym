import React from 'react'

export default function Navbar() {
    return(
        <div className='flex xl:ml-32 pt-6 xl:mr-40 space-x w-full sm:ml-16 sm:mr-16'>
            <div className='flex'>
                <img className='w-20' src="./images/logo.png"/>
                <h1 className="text-3xl text-white pt-2 pl-5">RubyPlanet</h1>
            </div>
            <ul className='flex text-white space-x-10 text-xl pt-3'>
                <li className='hover:text-red-main cursor-pointer'>Home</li>
                <li className='hover:text-red-main cursor-pointer'>About</li>
                <li className='hover:text-red-main cursor-pointer'>Classes</li>
                <li className='hover:text-red-main cursor-pointer'>Pricing</li>
            </ul>
        </div>
    )
}