import TitleSection from '@/components/landing-page/title-section'
import Image from 'next/image';
import React from 'react';
import Banner from '../../../public/appBanner.png'
import { Button } from '@/components/ui/button';



const HomePage = () => {
  return (
    <section>    
    <div className='overflow-hidden
    px-4 sm:px-6
    mt-10
    sm:flex
    sm:flex-col
    gap-4
    md:justify-center
    md:items-center'
    >
        <TitleSection 
         pill='✨Your workspace, perfected '
         title='All-In-One Collaborative And Productive Platform'
        />
        <div
          className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
        >
            
           <Button variant="btn-secondary" className=" w-full rounded-[10px] p-6 text-2xl bg-background">Get Creative Free</Button>
        </div>
        <div className='md:mt-[-90px]
        sm:w-full w-[750px]
        flex
        justify-center
        item-center
        mt-[-40px]
        relative
        sm:ml-0
        ml-[-50px]'>
            <Image src={Banner}
            alt='Application Banner' />

        </div>

    </div>
    </section>
  )
}

export default HomePage
