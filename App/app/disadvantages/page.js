import Link from 'next/link'
import React from 'react'

const Disdvantages = () => {
  return (
    <div>
      <section className='card '>
        <h1 className='text-2xl font-semibold'>Disadvantages of Solar PV System</h1>
        <ol type='1' className='list-decimal pl-8 my-2 gap-2 flex flex-col'>
          <li><span className='font-semibold'>High Initial Cost</span><p>The upfront cost of solar panels, inverters, and installation is relatively high.</p></li>
          <li><span className='font-semibold'>Weather Dependent</span><p>Solar power generation depends on sunlight and is less effective on cloudy or rainy days.</p></li>
          <li><span className='font-semibold'>No Power at Night</span><p>Solar PV systems do not generate electricity at night without battery storage.</p></li>
          <li><span className='font-semibold'>Requires Large Space</span><p>Large systems need sufficient roof or land area for proper installation.</p></li>
          <li><span className='font-semibold'>Energy Storage is Expensive</span><p>Batteries increase the overall system cost and require periodic replacement.</p></li>
          <li><span className='font-semibold'>Lower Efficiency</span><p>Solar panels have limited efficiency compared to conventional power sources.</p></li>
          <li><span className='font-semibold'>Installation Location Matters</span><p>Shadows from trees or buildings can reduce power output significantly.</p></li>
          <li><span className='font-semibold'>Inverter Replacement Cost</span><p>Inverters have a shorter lifespan than panels and may need replacement after 8–12 years.</p></li>


        </ol>
      </section>

      <section className="flex justify-between my-16">
        <Link className={` button `} href="/advantages">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span >Advantages</span>
        </Link>
        <Link className={` button `} href="/conclusion">
          <span >Conclusion</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default Disdvantages