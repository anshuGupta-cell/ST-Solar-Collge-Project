import Link from 'next/link'
import React from 'react'

const Graph = () => {
  return (
    <div className='flex flex-col gap-3 '>
        <section className='card '>
        <h2 className='text-2xl font-semibold'>Power VS Sunlight Intensity Graph</h2>

        </section>
        <section className='card'>
            <h2 className='text-xl font-semibold'>Explanation</h2>
            <p>The graph show the variation of power with respect to sunlight intensity.</p>
        </section>
        <section className="flex justify-between my-16">
        <Link className={` button `} href="/calculation">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span>Calculation</span>
        </Link>
        <Link className={` button `} href="/working">
          <span>Working Principle</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default Graph    