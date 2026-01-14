import Link from 'next/link'
import React from 'react'

const Working = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>Working principle of solar PV system</h1>
            <section className='card '>
                <ol type='1' className='list-decimal pl-8 my-2 gap-2 flex flex-col'>
                    <li><span className='font-semibold'>Sunlight Absorption</span><p>
                        Solar panels absorb sunlight falling on their surface</p></li>
                    <li><span className='font-semibold'>Generation of Electron–Hole Pairs</span><p>
                        The absorbed light energy excites electrons in the semiconductor material (usually silicon)</p></li>
                    <li><span className='font-semibold'>Charge Separation</span><p>
                        The built-in electric field at the p–n junction separates electrons and holes</p></li>
                    <li><span className='font-semibold'>Flow of Electric Current</span><p>
                        Electrons move through the external circuit, producing DC electricity</p></li>
                    <li><span className='font-semibold'>Power Conversion</span><p>
                        The DC power is converted into AC power using an inverter for practical use</p></li>
                    <li><span className='font-semibold'>Utilization / Storage</span><p>
                        The generated electricity is used directly, stored in batteries, or supplied to the grid</p></li>
                </ol>
            </section>
            <section className='card '>
                <h2 className='text-xl font-semibold'>Formula</h2>
                <p>Power = Intensity x Area x Efficiency</p>
            </section>
            <section className='card '>
                <h2 className='text-xl font-semibold'>Diagram</h2>
                <img src='/profile pic.png' />
            </section>
            <section className="flex justify-between my-16">
                <Link className={` button `} href="/graph">
                    <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
                    <span >Graph</span>
                </Link>
                <Link className={` button `} href="/applications">
                    <span >Applications</span>
                    <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
                </Link>
            </section>
        </div>
    )
}

export default Working