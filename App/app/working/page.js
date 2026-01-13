import React from 'react'

const Working = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>Working principle of solar PV system</h1>
            <section className='card '>
                <ul>
                    <li>
                        <span className='font-semibold'>Photoelectric effect - </span>
                        <p>When Sunlight falls on the solar cell, photons transfer energy to electrons.</p>
                    </li>
                    <li>
                        <span className='font-semibold'>Sunlight to electron flow - </span>
                        <p>The exited electron start moving creating an electric current.</p>
                    </li>
                    <li>
                        <span className='font-semibold'>DC electricity generation - </span>
                        <p>The movement of electrons produces DC electric power</p>
                    </li>
                    <li>
                        <span className='font-semibold'>Photoelectric effect - </span>
                        <p>When Sunlight falls on the solar cell, photons transfer energy to electrons</p>
                    </li>
                </ul>
            </section>
            <section className='card '>
                <h2 className='text-xl font-semibold'>Formula</h2>
                <p>Power = Intensity x Area x Efficiency</p>
            </section>
            <section className='card '>
                <h2 className='text-xl font-semibold'>Diagram</h2>
                <img src='/profile pic.png' />
            </section>
        </div>
    )
}

export default Working