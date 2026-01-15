'use client'
import { number } from 'motion'
import React, { useState } from 'react'

const TableInput = (props) => {

    const {
        generateGraph,
        links,
        setLinks
    } = props


    const handleChange = (i, power, sunlightIntensity) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, j) => {
                if (j == i) {
                    return { power, sunlightIntensity }
                } else {
                    return item
                }
            })
        })

    }
    const addLink = () => {
        setLinks(links.concat({ power: "", sunlightIntensity: "" }))
    }
    const removeLink = (i) => {
        if (links.length === 1) {
            toast("Atleat 1 row of data is required")

        }
        console.log(links.length);
        setLinks(links.filter((_, j) => j !== i))
    }


    return (
        <div className='max-w-[30rem]' onSubmit={(e) => generateGraph(e)}>
            <div className="ml-0   gap-2">
                <h2 className="text-wrap text-xl font-semibold">Graph Data</h2>
                <table className="border rounded-lg py-1 graph-table">
                    <thead className="table-header">
                        <tr >
                            <th>Power Output</th>
                            <th>Sunlight Intensity</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {links && links.map((item, i) => (
                            <tr className="opacity-95 relative" key={i} >
                                <td className='p-1 ' data-cell="Power Output">
                                    <input name="power" className="w- text-black rounded-full focus:outline-green-500 py-1 px-3 bg-slate-100 dark:bg-slate-600 dark:text-white/80" type="number" value={item.power || ""} onChange={(e) => handleChange(i, e.target.value, item.sunlightIntensity)} placeholder="Enter power" required />
                                </td>

                                <td className='p-1 ' data-cell="Sunlight Intensity">
                                    <input name="sunlightIntensity" className="w text-black rounded-full focus:outline-green-500 py-1 px-3 bg-slate-100 dark:bg-slate-600 dark:text-white/80" type="number" value={item.sunlightIntensity || ""} onChange={(e) => handleChange(i, item.power, e.target.value)} placeholder="Enter sunlight intensity" required />
                                </td>

                                <td className='p-1 ' data-cell=" ">
                                    <button type="button" disabled={links.length == 1} className="py-1" onClick={() => removeLink(i)}>
                                        <div className="btn transform-bg hover:bg-slate-200 p-1 rounded-full">
                                            <img className="dark:invert object-cover rounded-full w-[0.8rem] h-[0.8rem]" src="/svg/xmark-regular.svg" alt="remove" />
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" className="rounded-lg active:scale-95 py-1 px-2 bg-slate-800 dark:bg-pink-700 shadow-purple-600 shadow-md text-sm text-white w-fit" onClick={addLink} >Add Row</button>

            </div>
            <div className="flex justify-end ">
                <button type="submit" className="text-white bg-purple-700 px-3 active:scale-95 py-2 rounded-xl shadow-pink-600 shadow-md">Generate Graph</button>
            </div>
        </div>
    )
}

export default TableInput;