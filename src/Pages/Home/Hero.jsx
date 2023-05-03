import React from 'react'
import Navbar from '../../components/Navbar'
import HeroGraphics from '../../Assests/hero-graphics.svg'
import LineLogos from '../../Assests/Rectangle.png'
import Logos from '../../Assests/Logos.png'
import Button from '../../components/Button'
function Hero() {
    return (
        <section className='bg-background pt-14 text-white pb-10'>
            <Navbar />
            <div className='my-16 flex flex-col lg:flex-row justify-between  items-center'>
                <div className=' flex flex-col items-center lg:items-start  max-w-[35rem] mb-10 lg:mb-0 text-center sm:text-start '>
                        <h1 className=' font-normal text-3xl lg:text-4xl  xl:text-5xl  leading-normal '>Save time by building <br></br> fast with Boldo Template</h1>
                        <p className='font-normal text-xs lg:text-base font-sans leading-normal mt-4 mb-10 '>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                    <div className=' flex flex-col sm:flex-row sm:space-x-4 gap-y-5 items-center'>
                    <Button text='Buy template' color='#0A2640' backgroundColor='#65E4A3' border='2px solid #65E4A3' />
                    <Button text='Explore' color='white' backgroundColor='transparent' border='2px solid white' />
                    </div>
                </div>
                <img src={HeroGraphics} alt="" className='w-full sm:w-7/12 lg:w-5/12'/>
            </div>
            <div className='relative overflow-hidden' >
                <img src={LineLogos} alt="" className='absolute h-fit'/>
            <img src={Logos} alt="" /></div>
        </section>
    )
}

export default Hero
