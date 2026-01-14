import Link from 'next/link'
import React from 'react'

const Applications = () => {
  return (
    <div>
      <section className='card '>
        <h1 className='text-2xl font-semibold'>Applications of solar PV system</h1>
        <ol type='1' className='list-decimal pl-8 my-2 gap-2 flex flex-col'>
          <li>Home Solar System - Used for lighting, fans and household appliances.</li>
          <li>Solar Street Light - Provides automatic and energy efficient lighting.</li>
          <li>Water Pumping System - Used for irrigation and water supply in rural areas.</li>
          <li>Solar Power Plants - Large - Scale generation of electricity for grid supply.</li>
        </ol>
      </section>
      <section className="flex justify-between my-16">
        <Link className={` button `} href="/working">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span>Working Principle</span>
        </Link>
        <Link className={` button `} href="/advantages">
          <span>Advantages</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default Applications