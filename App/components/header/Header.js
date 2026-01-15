import React from 'react'
import "./style.css"

const Header = ({primaryNav}) => {

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
                    <h1 className='text-wrap'>Virtual Solar Power System</h1>
                </a>
            </div>
            
            {/* <div className="flex items-center">
                </div> */}
        </header>
    )
}

export default Header