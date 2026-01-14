import Link from 'next/link'
import React from 'react'

const Conclusion = () => {
    return (
        <div>
            <section className='card '>
                <h1 className='text-2xl font-semibold'>Conclusion</h1>
                <p>This website helps in understanding solar power calculation easily. The virtual solar power system works similar to a real solar solar PV syatem. This is very useful for educational and learning purpose.</p>
            </section>
            <section className="flex justify-between my-16">
                <Link className={` button `} href="/disadvantages">
                    <img className="icon" data-type="inverted" src="/svg/arrow-left-02-stroke-rounded.svg" />
                    <span>Disadvantages</span>
                </Link>
                
            </section>
        </div>
    )
}

export default Conclusion