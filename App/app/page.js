"use client"
import "./globals.css"

export default function App() {



  return (
    < div className="flex flex-col gap-3">
      <section className="py-4 grid res-grid-280 gap-4 card">
        <div className="grid gap-2 items-start">
          <h1 className="text-2xl font-semibold text-accent-400 text-center">Virtual Solar Power System</h1>
          <p className="text-center">The website is a virtual solar power designed to explain the basic working and calculation of a solar power system in a simple and interactive way it helps users understand how solar energy is converted into electrical energy using solar panels.</p>
        </div>
        <div><img className="rounded-lg" src="/profile pic.png" alt="Simple solar panel image"/></div>
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold">About Solar energy</h2>
        <p>Solar energy is a renewable and ecofriendly source of energy obtained from the sun it is clean unlimited and helps reduce dependene on fossil fuels.</p>
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold">Purpose of this website</h2>
        <ol className="px-4">
          <li>To calculate solar power generation.</li>
          <li>To understand solar energy conversion virtually.</li>
          <li>To provide educational knowledge about solar PV system.</li>
        </ol>
      </section>
      
    </div>
  )
}
