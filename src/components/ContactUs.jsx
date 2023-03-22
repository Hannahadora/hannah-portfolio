import React from 'react'
import ContactUsForm from './Forms/ContactUsForm'
import TestButton from './TestButton'

const ContactUs = () => {
    return (
        <>
            <section className='bg-[#242424] w-full pt-12 pb-32 relative'>
                <img className='absolute bottom-0 -left-40' src="/images/pattern-rings.svg" alt='decoration_item'/>
                <div className='page-wrapper flex lg:flex-row flex-col lg:items-start items-center justify-between'>
                    <div className='max-w-[380px] lg:text-left text-center'>
                        <h1 className=' md:text-[80px] text-[32px] leading-none'>Contact</h1>
                        <p className='lg:pt-[28px] pt-[28px] lg:pb-0 pb-20'>I would love to hear about your project and how I could be of help.
                            Please fill in the form and I'll get back to youas soon as possible.
                        </p>
                    </div>
                    <ContactUsForm />
                </div>
            </section>
        </>
    )
}

export default ContactUs