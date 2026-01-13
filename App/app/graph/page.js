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
    </div>
  )
}

export default Graph    