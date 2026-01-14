import Link from 'next/link'
import React from 'react'

const Advantages = () => {
  return (
    <div>
        <section className='card'>
            <h1 className='text-2xl font-semibold'>Advantages of Solar PV System</h1>
            <ul  className='px-6 my-2'>
                <li>Renewable sources of energy.</li>
                <li>Np pollution.</li>
                <li>Low maintenance.</li>
                <li>Free energy from the Sun.</li>
            </ul>
        </section>
        <section className="flex justify-between my-16">
        <Link className={` button `} href="/applications">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span>Applications</span>
        </Link>
        <Link className={` button `} href="/disadvantages">
          <span>Disadvantages</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default Advantages