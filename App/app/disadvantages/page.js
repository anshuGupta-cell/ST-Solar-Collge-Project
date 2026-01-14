import Link from 'next/link'
import React from 'react'

const Advantages = () => {
  return (
    <div>
      <section className='card '>
        <h1 className='text-2xl font-semibold'>Disadvantages of Solar PV System</h1>
        <ol type='1' className='list-decimal pl-8 my-2 gap-2 flex flex-col'>
          <li><span>High initial cost</span><p>The initial installation cost of a solar PV system is high.</p></li>
          <li><span>Weather dependent</span><p>Solar power generations depends on sunlight and weather conditions.</p></li>
          <li><span>Large area required</span><p>Large space is required for installing solar panels.</p></li>
          <li><span>Energy storage problem</span><p>Batteries are required to store energy, which increases system cost.</p></li>

        </ol>
      </section>

      <section className="flex justify-between my-16">
        <Link className={` button `} href="/advantages">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span>Advantages</span>
        </Link>
        <Link className={` button `} href="/conclusion">
          <span>Conclusion</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default Advantages