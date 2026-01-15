'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import Chart, { Legend, plugins, scales } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { Line } from 'react-chartjs-2';

const Graph = () => {

  const ctx = useRef(null)

  const data = {
    labels: [0, 200, 400, 600, 800, 1000],
    datasets: [{
      label: 'Power VS Sunlight Intensity ( w/m² )',//Alt + 0178 for "²"
      data: [0, 40, 80, 120, 160, 200],
      borderWidth: 1
    }]
  }

const options = {
  responsive: true,
  plugins: {
    legend:{
      display: true
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Sunlight Intensity ( w/m² )"
      }
    },
    y: {
      title: {
        display: true,
        text: "Power Output ( w )"
      }
    }
  }
}

  return (
    <div className='flex flex-col gap-3 '>
      <section className='card '>
        <h2 className='text-2xl font-semibold'>Power VS Sunlight Intensity Graph</h2>
        <div className=''>
          <Line className='' data={data} options={options}/>
        </div>
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