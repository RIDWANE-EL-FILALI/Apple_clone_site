import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';



const Highlights = () => {
    useGSAP(() => {
        gsap.to('#title', {
            duration: 1.5,
            opacity: 1,
            ease: 'power4.out',
            delay: 2,
            y: 0,
        }),
        gsap.to('.link', {
            duration: 1.5,
            opacity: 1,
            ease: 'power4.out',
            delay: 2,
            y: 0,
            stagger: 0.25,
        })
    }, []);


  return (
    <section id="highlights" className='w-sceen overflow-hidden h-full common-padding bg-zinc'>
        <div className="screen-max-width">
            <div className='mb-12 md:flex w-full items-end justify-between'>
                <h1 id="title" className='section-heading'>
                    Get the highlights.
                </h1>
                <div className="flex flex-wrap items-end gap-5">
                    <p className='link'>Watch the film
                        <img src={watchImg} alt="watch" className='ml-2' />
                    </p>
                    <p className='link'>Watch the Event
                        <img src={rightImg} alt="watch" className='ml-2' />
                    </p>
                </div>
            </div>

            <VideoCarousel/>
        </div>
    </section>
  )
}

export default Highlights