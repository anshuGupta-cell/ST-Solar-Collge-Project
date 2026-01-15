import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section id="top" className=" pt-10 grid place-items-center gap-4 max-w-4xl m-auto ">
            <div >
                <Image width={100} height={100} className="h-40 w-40 object-cover rounded-full" src="/profile pic.png" alt="" />
            </div>
            <p>Name: Tiwari Shubham Shivprasad</p>
            <p>Class: T.Y.BSc Physics</p>
            <p>University - Savitribai Phule Pune University ( SPPU )</p>
            <p>Subject - Physics project</p>
            <p className=" text-center text-3xl font-medium">
                Project Title - Virtual Solar Power System
            </p>
            <div className="flex gap-2">
                <Link href="/" className=" px-4 py-2 border rounded-full bg-slate-800 text-slate-100 flex items-center gap-2  border-slate-300  hover:-translate-y-1 duration-300">
                    Get Started
                    <img className="w-5 h-5 invert" src="/svg/arrow-up-right-01-stroke-rounded.svg" alt="arrow" />
                </Link>
                {/* <a href="" download className=" px-4 py-2 border rounded-full bg-slate-100 text-slate-700 flex items-center gap-2 border-slate-700  hover:-translate-y-1 duration-300">
                    My Resume
                    <img className="w-5 h-5" src="/svg/download-01-stroke-rounded.svg" alt="download" />
                </a> */}
            </div>
        </section>
    )
}

export default About