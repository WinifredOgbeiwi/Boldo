import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import serviceFlex from './servicesList'
function Services() {
    const ServicesList = serviceFlex.map((services) => {
        return (
            <div key={services.id} className='font-normal font-open-san'>
                <img src={services.img} alt="" />
                <div className=' max-w-[18.5rem] my-7'>
                    <h5 className='text-black text-2xl'>{services.title}</h5>
                    <p className='mt-3 text-xl text-grey'>{services.paragraph}</p></div>
                <a href={services.link} className='border-b-2 border-black pb-2'>Explore page
                    <BsArrowRightShort className='inline text-2xl ml-2' /></a>
            </div>
        )
    })
    return (
        <section className=' mt-20'>
            <div className='md:px-[150px]'>
                <div className='flex flex-col items-center mb-[76px]'>
                    <h4
                        className=' text-grey text-md sm:text-xl font-normal font-sans'
                    >Our Services</h4>
                    <h2
                        className=' font-normal text-4xl sm:text-5xl text-black leading-normal text-center'
                    >Handshake infographic mass market crowdfunding iteration.</h2>
                </div>
                <div className='flex flex-wrap justify-center xl:justify-between items-center gap-10'>
                    {ServicesList}
                </div>

            </div>
        </section>
    )
}

export default Services
