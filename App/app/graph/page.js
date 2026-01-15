'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Chart, { Legend, plugins, scales } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { Line } from 'react-chartjs-2';
import TableInput from '@/components/tableInput/tableInput';

const Graph = () => {

  const ctx = useRef(null)
  const [links, setLinks] = useState([
    { power: "0", sunlightIntensity: "0" },
    { power: "40", sunlightIntensity: "200" },
    { power: "80", sunlightIntensity: "400" },
    { power: "120", sunlightIntensity: "600" },
    { power: "160", sunlightIntensity: "800" },
    { power: "200", sunlightIntensity: "1000" },
  ])
  const [chartData, setChartData] = useState({
    labels: [0, 200, 400, 600, 800, 1000], // sunlight intensity
    datasets: [{
      label: 'Power VS Sunlight Intensity ( w/m² )',//Alt + 0178 for "²"
      data: [0, 40, 80, 120, 160, 200], // power
      borderWidth: 1
    }]
  })



  const options = {
    responsive: true,
    plugins: {
      legend: {
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
          text: "power Output ( w )"
        }
      }
    }
  }

  const generateGraph = (e) => {
    e.preventDefault()

    setChartData({
      labels: links.map((item, i) => (item.sunlightIntensity)),
      datasets: [{
        label: 'power VS Sunlight Intensity ( w/m² )',//Alt + 0178 for "²"
        data: links.map((item, i) => (item.power)),
        borderWidth: 1
      }]
    })

  }

  return (
    <div className='flex flex-col gap-3 '>
      <section className='card'>
        <h2 className='text-2xl font-semibold'>Power VS Sunlight Intensity Graph</h2>

        <div className='my-5 '>
          <TableInput
            links={links}
            setLinks={setLinks}
            generateGraph={generateGraph}
          />
        </div>

        {/* <div>
          <h3 className='text-xl font-semibold'>Graph data</h3>
          <table className='graph-table'>
            <thead className="table-header">
              <tr >
                <th>Sr. No.</th>
                <th>Power Output</th>
                <th>Sunlight Intensity</th>
              </tr>
            </thead>
            <tbody>
              {links.map((item, i) => (
                <tr className="table-row">
                  <td data-cell="Sr. No.">{i + 1}</td>
                  <td data-cell="Power Output">{item.power}</td>
                  <td data-cell="Sunlight Intensity">{item.sunlightIntensity}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div> */}
        
        <div className=''>
          <Line className='' data={chartData} options={options} />
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