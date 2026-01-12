import React from 'react'

const SystemDiagram = () => {
  return (
    <div className='grid res-grid-280 p-2 gap-4'>
        <img className='rounded-lg object-cover' src='/profile pic.png' alt='labelled solar PV diagram'/>
        <section>
            <h1 className='text-xl font-semibold'>System Working</h1>
            <p>Sunlight falls on the solar panel and is converted into electrical energy. The solar panel generates DC power from sunlight. The inverter converts DC power inot AC power, which is supplied to the load such as lights or electrical appliances</p>
        </section>
    </div>
  )
}

export default SystemDiagram