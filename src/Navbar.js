import React, {useRef} from 'react'

export default function Navbar() {
    var x = useRef("");
    var nav = useRef("")

    function myFunction() {
        if (x.current.style.display === "block") {
            x.current.style.display = "none";
            nav.current.style.height = "200px"
        } else {
            x.current.style.display = "block";
            nav.current.style.height = "500px"
        }
    }

    return(
        <div>
            <div className='xl:flex xl:ml-32 pt-6 md:pt-10 xl:mr-40 space-x sm:w-nav w-nav sm:ml-16 sm:mr-16 sm:hidden md:pr-32'>
                <div className='flex'>
                    <img className='w-20 md:w-32' src="./images/logo.png"/>
                    <h1 className="text-3xl md:text-6xl text-white pt-2 pl-5">RubyPlanet</h1>
                </div>
                <ul className='flex text-white space-x-10 text-xl pt-3 md:text-4xl'>
                    <li className='hover:text-red-main cursor-pointer'>Home</li>
                    <li className='hover:text-red-main cursor-pointer'>About</li>
                    <li className='hover:text-red-main cursor-pointer'>Classes</li>
                    <li className='hover:text-red-main cursor-pointer'>Pricing</li>
                </ul>
            </div>
            <div className='xl:hidden'>
                <div className='mobile-container pl-24 pt-10' ref={nav}>
                    <div class="topnav">
                    <div className='flex'>
                        <img className='w-25' src="./images/logo.png"/>
                        <h1 className="text-7xl text-white pt-6 pl-5">RubyPlanet</h1>
                    </div>
                    <div id="myLinks" className='hidden' ref={x}>
                        <a className='text-white pt-8 pb-8 pr-8 text-5xl block bg-red-main text-right mt-4' href="#news">News</a>
                        <a className='text-white pt-8 pb-8 pr-8 text-5xl block bg-red-main text-right mt-1' href="#contact">Contact</a>
                        <a className='text-white pt-8 pb-8 pr-8 text-5xl block bg-red-main text-right mt-1' href="#about">About</a>
                    </div>
                    <a href="javascript:void(0);" className='block absolute right-0 top-0 text-white pl-8 pr-8 pt-8 text-8xl' onClick={() => myFunction()}>
                        <i class="fa fa-bars"></i>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}