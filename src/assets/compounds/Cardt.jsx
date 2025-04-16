import React from 'react'
import images from '../images/Images'

const Cardt=({newsData,newstype,colour})=> {
  return (
    <div className='p-4'>
      <div className='relative'>
<img src={newsData?.og||"/Post-1.png"} alt="" />
<button className={`${colour} text-white absolute top-3 left-3 px-2 py-1`}>
{newstype?newstype:'Business'}
      </button>
      <p className="text-sm mb-1"><strong>Craig Bator</strong> - 27 Dec 2020</p>
      <h1 className='font-bold'>{newsData?.title||"no"}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati cum possimus <br /> est veniam voluptates quidem exercitationem adipisci blanditiis impedit!</p>
      
      </div>
   
    </div>
  )
}

export default Cardt