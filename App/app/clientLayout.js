"use client"
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/Navbar.js";
import Header from "@/components/header/Header";
import { useRef } from "react";

const clientLayout = ({children}) => {

    const primaryNav = useRef(null)

    return (
        <>
            <ToastContainer />
            <Header primaryNav={primaryNav} />
            <div className="layout">
                <Navbar primaryNav={primaryNav} />
                <main className="main p-2 ">
                    {children}
                </main>
            </div>
        </>
    )
}

export default clientLayout;