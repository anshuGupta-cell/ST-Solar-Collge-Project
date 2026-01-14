import Link from 'next/link'
import React from 'react'

const Advantages = () => {
  return (
    <div>
      <section className='card'>
        <h1 className='text-2xl font-semibold'>Advantages of Solar PV System</h1>
        <ol type='1' className='list-decimal pl-8 my-2 gap-2 flex flex-col'>
          <li><span className='font-semibold'>Renewable & Sustainable Energy</span><p>Solar PV uses sunlight, an unlimited and renewable energy source, helping reduce dependence on fossil fuels.</p></li>
          <li><span className='font-semibold'>Eco-Friendly</span><p>It produces electricity without air pollution, greenhouse gases, or noise, supporting a cleaner environment.</p></li>
          <li><span className='font-semibold'>Low Electricity Bills</span><p>Solar panels significantly reduce monthly electricity costs and can even generate surplus power.</p></li>
          <li><span className='font-semibold'>Low Maintenance</span><p>Solar PV systems require minimal maintenance and have a long operational life (25–30 years).</p></li>
          <li><span className='font-semibold'>Energy Independence</span><p>Users become less dependent on the power grid and rising electricity prices.</p></li>
          <li><span className='font-semibold'>Easy Installation</span><p>Solar PV systems are easy to install on rooftops, open land, or commercial buildings.</p></li>
          <li><span className='font-semibold'>Scalable & Flexible</span><p>Systems can be expanded easily according to future energy needs.</p></li>
          <li><span className='font-semibold'>Suitable for Remote Areas</span><p>Provides electricity in rural and off-grid locations where conventional power is unavailable.</p></li>
          <li><span className='font-semibold'>Government Support & Subsidies</span><p>Many governments offer subsidies, tax benefits, and incentives for solar installations</p></li>
          <li><span className='font-semibold'>Increases Property Value</span><p>Buildings with solar PV systems have higher market value and better energy ratings.</p></li>

        </ol>
      </section>
      <section className="flex justify-between my-16">
        <Link className={` button `} href="/applications">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span >Applications</span>
        </Link>
        <Link className={` button `} href="/disadvantages">
          <span >Disadvantages</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default Advantages