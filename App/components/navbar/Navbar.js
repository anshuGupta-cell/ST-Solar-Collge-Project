"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import "./style.css"



const Navbar = ({primaryNav}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const subMenu = useRef()
    const pathName = usePathname()
    const sideMenuRef = useRef()
    console.log(pathName);


    useEffect(() => {
        if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)

        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
            localStorage.theme = "dark"
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.theme = ""

        }
    }, [isDarkMode])


    const toggleNav = () => {
        primaryNav.current.toggleAttribute("data-visible")
    }

    const openSubMenu = (e) => {

        console.log(subMenu.current.classList.toggle("rotated"))

    }


    return (

        <aside className="primary-navigation" id="primary-navigation" ref={primaryNav}>
            <nav>
                <ul aria-label="Primary" role="list" className="nav-list">
                    <li className="nav-items nav-top ">
                        <a href="#"><span>Menu</span></a>
                        <button onClick={toggleNav} className="nav-toggle bg-accent-500" aria-controls="primary-navigation" aria-expanded="false">
                            <img className="icon-close | icon " data-type="" src="/svg/xmark-regular.svg" alt="" />
                        </button>
                    </li>
                    <li className={`nav-items `}>
                        <Link className={`${pathName === '/' ? 'active' : ''}`} href="/"><span>Home</span></Link>
                    </li>
                    <li className="nav-items">
                        <Link className={`${pathName === '/system-diagram' ? 'active' : ''}`} href="/system-diagram"><span>System Diagram</span></Link>
                    </li>
                    <li className="nav-items">
                        <Link className={`${pathName === '/calculation' ? 'active' : ''}`} href="/calculation"><span>Calculation</span></Link>
                    </li>
                    <li className="nav-items">
                        <Link className={`${pathName === '/graph' ? 'active' : ''}`} href="/graph"><span>Graph</span></Link>
                    </li>
                    <li className="nav-items">
                        <Link className={`${pathName === '/working' ? 'active' : ''}`} href="/working"><span>Working</span></Link>
                    </li>
                    <li className="nav-items">
                        <Link className={`${pathName === '/applications' ? 'active' : ''}`} href="/applications"><span>Applications</span></Link>
                    </li>
                    <li className="nav-items">
                        <Link className={`${pathName === '/advantages' ? 'active' : ''}`} href="/advantages"><span>Advantages</span></Link>
                    </li>
                    <li className="nav-items">
                        <Link className={`${pathName === '/disadvantages' ? 'active' : ''}`} href="/disadvantages"><span>Disadvantages</span></Link>
                    </li>
                    <li className="nav-items">
                        <Link className={`${pathName === '/conclusion' ? 'active' : ''}`} href="/conclusion"><span>Conclusion</span></Link>
                    </li>
                    {/* <li className="nav-items  ">
                            <button onClick={(e) => openSubMenu(e)} ref={subMenu} className="dropdown-btn active rotated ">
                                <span>Introduction</span>
                                <img className="icon-sm" src="/svg/angle-down.svg" alt="" />
                            </button>
                            <ul className="sub-menu show">
                                <div>
                                    <li className="">
                                        <a href=""><span>Heading 1</span></a>
                                    </li>
                                    <li>
                                        <a href=""><span>Heading 2</span></a>
                                    </li>
                                    <li>
                                        <a href=""><span>Heading 3</span></a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li className="nav-items  ">
                            <button className="dropdown-btn active">
                                <span>Introduction</span>
                                <img className="icon-sm" src="/svg/angle-down.svg" alt="" />
                            </button>
                            <ul className="sub-menu show">
                                <div>
                                    <li className="">
                                        <a href=""><span>Heading 1</span></a>
                                    </li>
                                    <li>
                                        <a href=""><span>Heading 2</span></a>
                                    </li>
                                    <li>
                                        <a href=""><span>Heading 3</span></a>
                                    </li>
                                </div>
                            </ul>
                        </li> */}


                </ul>
            </nav>
        </aside>
    )
}

export default Navbar;
