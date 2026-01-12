
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/Navbar.js";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Virtual Solar Power System - web based simulation",
  description: "The portfolio of Anshu Gupta",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" className="">
      <body className={``}>

        <ToastContainer />
        <Navbar />
        <main className="main p-2 ">
          {children}
        </main>
      </body>
    </html>
  )
}
