import React from 'react'
import images from '../images/Images'

const Cardnew=({newsData})=> {
  return (
    <div className='flex gap-4 mt-4'>
          <div className='relative w-[100px]'>
    <img src={newsData?.og||"/Post-1.png"} alt="" />
    
          </div>
          <div>
          <p className="text-sm mb-1"><strong>Craig Bator</strong> - 27 Dec 2020</p>
          <h1 className='font-bold '>{newsData?.title||"no"}</h1>
          </div>
          
       
        </div>
  );
};

export default Cardnew