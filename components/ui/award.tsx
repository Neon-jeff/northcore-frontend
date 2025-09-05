import React from 'react'
import { FeatherIcon } from '../icons/feathers';

interface StatProps{
    title : string;
    description : string ;
}

const FeatherStats = ({title,description}:StatProps) => {
  return (
    <div className='flex  gap-4 '>
      <FeatherIcon.Left/>
        <div className='flex flex-col gap-4 text-center lg:w-[200px] max-xs:w-[200px] w-[200px]'>
            <span className='font-semibold text-black  text-xl '>{`${title}`}</span>
            <span className=' text-gray-700 lg:text-xs block'>{`${description}`}</span>
        </div>
      <FeatherIcon.Right/>
    </div>
  )
}

export default FeatherStats