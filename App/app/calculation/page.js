'use client'

import React, { useState } from 'react'

const Calculation = () => {
  const [sunlightIntensity, setSunlightIntensity] = useState("")
  const [panelArea, setPanelArea] = useState("")
  const [panelEfficiency, setPanelEfficiency] = useState("")
  const [power, setPower] = useState(0)
  const [energy, setEnergry] = useState(0)

  const handleCalculate = (e) => {
    e.preventDefault()
    const power = sunlightIntensity * panelArea * panelEfficiency;
    setPower(power)
    setEnergry(power * 1)
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Solar Power Calculation</h1>
      {/* <section className='py-4 flex flex-wrap gap-4'> */}
      <section className='py-4 grid res-grid-280 gap-4'>
        <div className=''>

          <h2 className='text-xl font-semibold'>Input values</h2>
          <form className='flex flex-col gap-2' onSubmit={(e) => handleCalculate(e)}>
            <label className='flex justify-between items-center gap-2 cursor-pointer'>
              <span>Sunlight Intensity ( w/m<sup className='z-[-1]'>2</sup> ): </span>
              <input className='text-black rounded-full focus:outline-green-500 py-1 px-3 bg-slate-100 dark:bg-slate-600 dark:text-white/80' value={sunlightIntensity || ""} onChange={(e) => setSunlightIntensity(e.target.value)} placeholder='Enter Sunlight Intensity' />
            </label>
            <label className='flex justify-between cursor-pointer'>
              <div>Panel Area ( m<sup className='z-[-1]'>2</sup> ): </div>
              <input className='text-black rounded-full focus:outline-green-500 py-1 px-3 bg-slate-100 dark:bg-slate-600 dark:text-white/80' value={panelArea || ""} onChange={(e) => setPanelArea(e.target.value)} placeholder='Enter Sunlight Intensity' />
            </label>
            <label className='flex justify-between'>
              <span>Panel Efficiency ( % ): </span>
              <input className='text-black rounded-full focus:outline-green-500 py-1 px-3 bg-slate-100 dark:bg-slate-600 dark:text-white/80' value={panelEfficiency || ""} onChange={(e) => setPanelEfficiency(e.target.value)} placeholder='Enter Panel Efficiency' />
            </label>
            <button className='button'>Calculate Power</button>
          </form>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>Output Results</h2>
          <ul className='text-sm font-bold'>
            <li>Power (w): {power}</li>
            <li>Energy generated (wh/kwh): {energy}</li>
          </ul>
        </div>
      </section>
      <section className='py-4'>
        <h2 className='text-xl font-semibold'>Formula used: </h2>
        <ul>
          <li>Power (w) = Sinlight intensity x Panel Area x Efficiency</li>
          <li>Energy (Wh) = Power x Time</li>
        </ul>
      </section>
      <section className='py-4'>
        <h2 className='text-xl font-semibold'>Explanation</h2>
        <p>The user enters the required input values. Such as sunlight intensity, panel area and efficiency. Based on these inputs the system calculates the output power and total energy generated. This helps in understanding solar power calculation practically.</p>
      </section>
    </div>
  )
}

export default Calculation