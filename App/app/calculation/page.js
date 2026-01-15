'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Calculation = () => {
  const [sunlightIntensity, setSunlightIntensity] = useState(0)
  const [panelArea, setPanelArea] = useState(0)
  const [panelEfficiency, setPanelEfficiency] = useState(0)
  const [time, setTime] = useState(0)
  const [power, setPower] = useState(0)
  const [energy, setEnergry] = useState(0)

  const handleCalculate = (e) => {
    e.preventDefault()
    const power = sunlightIntensity * panelArea * panelEfficiency;
    setPower(power)
    setEnergry(power * time)
  }

  return (
    <div className='flex flex-col gap-3 '>
      <h1 className='text-2xl font-semibold'>Solar Power Calculation</h1>
      <section className='py-4 flex flex-col gap-6 card'>
        {/* input  */}
        <div className=''>
          <h2 className='text-xl font-semibold'>Input values</h2>
          <form className='flex flex-col gap-2' onSubmit={(e) => handleCalculate(e)}>
            <label className='flex flex-col gap-2 cursor-pointer'>
              <span>Sunlight Intensity ( w/m<sup className=''>2</sup> ): </span>
              <input type='number' className='text-black rounded-full focus:outline-green-500 py-2 px-3 bg-slate-100 ' value={sunlightIntensity || ""} onChange={(e) => setSunlightIntensity(e.target.value)} placeholder='Enter Sunlight Intensity' required />
            </label>
            <label className='flex flex-col gap-1 cursor-pointer'>
              <div>Panel Area ( m<sup className=''>2</sup> ): </div>
              <input type='number' className='text-black rounded-full focus:outline-green-500 py-2 px-3 bg-slate-100 ' value={panelArea || ""} onChange={(e) => setPanelArea(e.target.value)} placeholder='Enter Sunlight Intensity' required />
            </label>
            <label className='flex flex-col gap-1 cursor-pointer'>
              <span>Panel Efficiency ( % ): </span>
              <input type='number' className='text-black rounded-full focus:outline-green-500 py-2 px-3 bg-slate-100 ' value={panelEfficiency || ""} onChange={(e) => setPanelEfficiency(e.target.value)} placeholder='Enter Panel Efficiency' required />
            </label>
            <label className='flex flex-col gap-1 cursor-pointer'>
              <span>Time ( t ): </span>
              <input type='number' min={1} className='text-black rounded-full focus:outline-green-500 py-2 px-3 bg-slate-100 ' value={time || ""} onChange={(e) => setTime(e.target.value)} placeholder='Enter Time in hours' required />
            </label>
            <button className='button m-auto'>Calculate Power & Energy</button>
          </form>
        </div>
        {/* output  */}

        <div className=''>
          <h2 className='text-xl font-semibold'>Formula used</h2>
          <ul className='pl-4'>
            <li>Power (w) = Sunlight Intensity x Panel Area x Efficiency</li>
            <li>Energy (wh) = Power x Time</li>
          </ul>
        </div>
        <div className=''>
          <h2 className='text-xl font-semibold'>Calculation</h2>
          <ul className='pl-4'>
            <li>Power (w) = {sunlightIntensity == 0 ? "Sunlight Intensity" : sunlightIntensity} x {panelArea == 0 ? "Panel Area" : panelArea} x {panelEfficiency == 0 ? "Efficiency" : panelEfficiency}</li>
            <li>Energy (wh) = {power == 0 ? "Power" : power} x {time == 0 ? "Time" : time}</li>
          </ul>
        </div>
        <div className=''>
          <h2 className='text-xl font-semibold'>Output Result</h2>
          <ul className='text-sm font-bold pl-4'>
            <li>Power Generated (w): {power}</li>
            <li>Energy Generated (wh): {energy}</li>
          </ul>
        </div>
      </section>
      <section className='py-4 card'>
        <h2 className='text-xl font-semibold'>Explanation</h2>
        <p>The user enters the required input values. Such as sunlight intensity, panel area and efficiency. Based on these inputs the system calculates the output power and total energy generated. This helps in understanding solar power calculation practically.</p>
      </section>
      <section className="flex justify-between my-16">
        <Link className={` button `} href="/system-diagram">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span>Syatem Diagram</span>
        </Link>
        <Link className={` button `} href="/graph">
          <span>Graph</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default Calculation