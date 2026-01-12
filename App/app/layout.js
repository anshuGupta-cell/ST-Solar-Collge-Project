"use client"
import "./globals.css"
import { useRef } from "react";
import clientLayout from "./clientLayout";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/Navbar.js";
import Header from "@/components/header/Header";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Virtual Solar Power System - web based simulation",
//   description: "The portfolio of Anshu Gupta",
// };

export default function RootLayout({ children }) {
  const primaryNav = useRef(null)
  return (
    <html lang="en" className="">
      <body className={``}>
        {/* <clientLayout >{children}</clientLayout> */}
        <ToastContainer />
        <Header primaryNav={primaryNav} />
        <div className="layout">
          <Navbar primaryNav={primaryNav} />
          <main className="main p-2 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
