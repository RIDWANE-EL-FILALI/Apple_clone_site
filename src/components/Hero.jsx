import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../utils'


const Hero = () => {
    const [VideoSrc, setVideoSrc] = React.useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo) 

    const handleVideo = () => {
        setVideoSrc(window.innerWidth > 768 ? heroVideo : smallHeroVideo)
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideo)
        return () => window.removeEventListener('resize', handleVideo)
    }, [])

    useGSAP(() => {
        gsap.to('.hero-title', {
            duration: 1.5,
            opacity: 1,
            ease: 'power4.out',
            delay: 2,
            scale: 1,
        }),
        gsap.to('#cta', {
            duration: 1.5,
            opacity: 1,
            ease: 'power4.out',
            delay: 2,
            y: -40,
        })
    }, []);

  return (
    <section className='w-full nav-height bg-black position-relative'>
        <div className="h-5/6 w-full flex-center flex-col">
            <p className='hero-title'>iphone 15 pro</p>
            <div className='md:w-10/12 w-9/12'>
                <video className='pointer-events-none' autoPlay muted playsInline={true} key={VideoSrc} >
                    <source src={VideoSrc} type='video/mp4' />
                </video>
            </div>
            <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href="#cta" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
            </div>
        </div>

    </section>
  )
}

export default Hero