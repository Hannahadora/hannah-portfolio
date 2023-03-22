import React from 'react'

const Skillset = () => {
    return (
        <div className='overflow-hidden relative'>
            <section className='page-wrapper'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:text-left text-center space-y-5 border-t-2 sm:py-20 py-16 border-white'>
                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>HTML</h1>
                        <p>4 Years Experience</p>
                    </div>
                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>CSS</h1>
                        <p>4 Years Experience</p>
                    </div>
                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>Javascript</h1>
                        <p>3 Years Experience</p>
                    </div>
                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>TypeScript</h1>
                        <p>2 Years Experience</p>
                    </div>
                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>Vue</h1>
                        <p>2 Years Experience</p>
                    </div>
                    <div>
                        <h1 className='md:text-[36px] text-[26px]'>React</h1>
                        <p>1 Year Experience</p>
                    </div>
                </div>

            </section>
            <img className='absolute bottom-16 -right-64' src="/images/pattern-rings.svg" alt='decoration_item'/>
        </div>
    )
}

export default Skillset