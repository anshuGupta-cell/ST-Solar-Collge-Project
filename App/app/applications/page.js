import Link from 'next/link'
import React from 'react'

const Applications = () => {
  return (
    <div>
      <section className='card '>
        <h1 className='text-2xl font-semibold'>Applications of solar PV system</h1>
        <ol type='1' className='list-decimal pl-8 my-2 gap-2 flex flex-col'>
          <li><span className='font-semibold'>Residential Power Supply</span><p>
            Used in homes for lighting, fans, TVs, refrigerators, and other household appliances.</p></li>
          <li><span className='font-semibold'>Commercial Buildings</span><p>
            Installed in offices, malls, hotels, and hospitals to reduce electricity costs.</p></li>
          <li><span className='font-semibold'>Industrial Power Generation</span><p>
            Provides power for factories, warehouses, and small manufacturing units.</p></li>
          <li><span className='font-semibold'>Rural & Off-Grid Electrification</span><p>
            Supplies electricity to remote villages where grid power is unavailable.</p></li>
          <li><span className='font-semibold'>Solar Street Lighting</span><p>
            Used for street lights, highways, parking areas, and public spaces.</p></li>
          <li><span className='font-semibold'>Water Pumping Systems</span><p>
            Solar PV runs irrigation pumps and drinking water supply systems in agriculture.</p></li>
          <li><span className='font-semibold'>Telecommunication Systems</span><p>
            Used in mobile towers, relay stations, and remote communication networks.</p></li>
          <li><span className='font-semibold'>Educational Institutions</span><p>
            Provides clean energy to schools, colleges, and research centers.</p></li>
          <li><span className='font-semibold'>Healthcare Facilities</span><p>
            Used in hospitals and clinics for reliable power to medical equipment.</p></li>
          <li><span className='font-semibold'>Portable & Small Devices</span><p>
            Used in solar chargers, calculators, lamps, and portable power systems.</p></li>
        </ol>
      </section>
      <section className="flex justify-between my-16">
        <Link className={` button `} href="/working">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span >Working Principle</span>
        </Link>
        <Link className={` button `} href="/advantages">
          <span >Advantages</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default Applications