"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import "./style.css"



const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const primaryNav = useRef()
    const subMenu = useRef()

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

    const pathName = usePathname()
    const active = "bg-slate-800 rounded-lg font-bold text-white"
    const sideMenuRef = useRef()

    const toggleNav = () => {
        primaryNav.current.toggleAttribute("data-visible")
    }

    const openSubMenu = (e) => {

        console.log(subMenu.current.classList.toggle("rotated"))

    }


    return (
        <>
            <header className="primary-header">
                <div className="flex items-center gap-2">
                    <button onClick={toggleNav} className="nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                        <span className="visullay-hidden">Menu</span>
                        <img className="icon-hamburger | icon" src="/svg/bars-solid.svg" alt="" aria-hidden="true" />
                    </button>
                    <a href="/">
                        <h1>Vertual Solar Power</h1>
                        <h1>System - Web Base Simulation</h1>
                    </a>

                </div>
                {/* <div className="flex items-center">
                </div> */}
            </header>
            <aside className="primary-navigation" id="primary-navigation" ref={primaryNav}>
                <nav>
                    <ul aria-label="Primary" role="list" className="nav-list">
                        <li className="nav-items nav-top">
                            <a href="#"><span>Menu</span></a>
                            <button onClick={toggleNav} className="nav-toggle bg-accent-500" aria-controls="primary-navigation" aria-expanded="false">
                                <img className="icon-close | icon " data-type="" src="/svg/xmark-regular.svg" alt="" />
                            </button>
                        </li>
                        <li className="nav-items">
                            <Link href="/"><span>Home</span></Link>
                        </li>
                        <li className="nav-items">
                            <Link href="/system-diagram"><span>System Diagram</span></Link>
                        </li>
                        <li className="nav-items">
                            <Link href="/calculation"><span>Calculation</span></Link>
                        </li>
                        <li className="nav-items">
                            <Link href="/graph"><span>Graph</span></Link>
                        </li>
                        <li className="nav-items">
                            <Link href="/working"><span>Working</span></Link>
                        </li>
                        <li className="nav-items">
                            <Link href="/graph"><span>Graph</span></Link>
                        </li>
                        <li className="nav-items">
                            <Link href="/graph"><span>Graph</span></Link>
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
        </>
    )
}

export default Navbar;
