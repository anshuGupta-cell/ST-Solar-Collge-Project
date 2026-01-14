import Link from 'next/link'
import React from 'react'

const SystemDiagram = () => {
  return (
    <div >
      <section className='grid res-grid-280 p-2 gap-4 card'>

        <img className='rounded-lg object-cover' src='/profile pic.png' alt='labelled solar PV diagram' />
        <div>
          <h1 className='text-xl font-semibold'>System Working</h1>
          <p>Sunlight falls on the solar panel and is converted into electrical energy. The solar panel generates DC power from sunlight. The inverter converts DC power inot AC power, which is supplied to the load such as lights or electrical appliances</p>
        </div>
      </section>
      <section className="flex justify-between my-16">
        <Link className={` button `} href="/">
          <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
          <span>Home</span>
        </Link>
        <Link className={` button `} href="/calculation">
          <span>Calculation</span>
          <img className="icon" data-type="inverted" src="/svg/arrow-right-02-stroke-rounded.svg" />
        </Link>
      </section>
    </div>
  )
}

export default SystemDiagram