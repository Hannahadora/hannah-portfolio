import React, { useEffect, useRef } from 'react'
import CustomButton from './Shared/CustomButton'
import { motion } from 'framer-motion'
import { easeIn, zoomOut } from '../utils/GsapAnimations'

const HeroLanding = () => {
    const introRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        zoomOut(imageRef, 0.9)
        easeIn(introRef)
    }, [])
    return (
        <div id='about'>
            <motion.img
                animate={{ rotate: 10, y: 50, opacity: 1 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    duration: 10,
                }}
                initial={{ opacity: 0.25 }}
                className='absolute md:top-32 top-48 -left-40' src="/images/pattern-rings.svg" alt='decoration_item' />
            <section className='page-wrapper flex md:flex-row flex-col-reverse items-center justify-between md:pb-0 pb-7'>
                <div ref={introRef} className='md:text-left text-center md:mt-[134px] mt-[40px] relative z-10'>
                    <h1 className='lg:text-[80px] md:text-[40px] text-[30px] leading-none'>Nice to <br className='xl:hidden md:block hidden' /> meet you! <br className='xl:block md:hidden block' /> I'm  <span className='border-b border-green-500'><br className='xl:hidden md:block hidden' />Hannah Ejimofor</span>.</h1>
                    <p className='md:max-w-[380px] w-[380px] md:text-[18px] text-[16px] md:mx-0 mx-auto py-[50px] lg:px-0 px-[16px]'>Based in the Nigeria, I'm a front-end developer passionate about building accessible web apps that users love.</p>
                    <a href='/files/hannah-resume.pdf' download={"Hannah's Resume"} target={'_blank'}><CustomButton text={'Download Resume'} /></a>
                </div>
                <div ref={imageRef} className='md:max-w-[500px] max-w-[350px] md:absolute -top-20 lg:right-0 -right-24'>
                    <img className='md:h-[860px] h-[450px] shadow' src="/images/my-portrait-1.jpg" alt="my_image" />
                    <img className='absolute bottom-32 -left-16' src="/images/pattern-circle.svg" alt="patterns" />
                </div>
            </section>
        </div>
    )
}

export default HeroLanding