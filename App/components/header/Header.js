import React from 'react'
import "./style.css"
import Link from 'next/link'

const Header = ({ primaryNav }) => {

    const toggleNav = () => {
        primaryNav.current.toggleAttribute("data-visible")
    }

    return (
        <header className="primary-header">
            <div className="header-wrapper">
                <button onClick={toggleNav} className="nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                    <span className="visullay-hidden">Menu</span>
                    <img className="icon-hamburger | icon" src="/svg/bars-solid.svg" alt="" aria-hidden="true" />
                </button>
                <a href="/">
                    <h1 className='text-wrap'>Virtual Solar PV System</h1>
                </a>
            </div>

            {/* <div className=" px-4 py-2 border rounded-full bg-slate-100 text-slate-700 flex items-center gap-2 border-slate-700  hover:-translate-y-1 duration-300">
                <Link href="/about">About me</Link>
            </div> */}
        </header>
    )
}

export default Header