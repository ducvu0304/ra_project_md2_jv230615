import React from 'react'
import AboutUsImg from '@images/AboutUs.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function AboutUs() {
  return (
    <div className='relative mb-[70px]' >
        <div className='relative  bg-[#c2a09e] h-[1000px]'>
            <div className='absolute bottom-0 px-10  text-white '>
                <p className=' text-3xl'>Discover Your Personal Style and the Confidence That Comes with It.</p>
                <p className=''>
                    Tempora aliqua cillum accusamus aperiam pharetra cupidatat 
                    fermentum viverra delectus quidem incidunt tempus itaque quam, 
                    id blandit dolores, proin reiciendis. Nostrum proin sem veniam veritatis inceptos!
                </p>
                <button className='my-12 border-solid border-2 text-center w-[150px] h-[50px]'><ArrowRightAltIcon className='pb-1'/>Read More</button>
            </div>
        </div>
        <div className='absolute top-[-40px] left-36 z-10 border-solid border- '>
            <img 
                src={AboutUsImg}
                alt=""
                className=''    
            />
        </div>
    </div>
  )
}
