import React from 'react'

const Working = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Working principle of solar PV system</h1>
            <section>
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
            <section>
                <h2>Formula</h2>
                <p>Power = Intensity x Area x Efficiency</p>
            </section>
            <section>
                <h2>Diagram</h2>
                <img src='/profile pic.png' />
            </section>
        </div>
    )
}

export default Working