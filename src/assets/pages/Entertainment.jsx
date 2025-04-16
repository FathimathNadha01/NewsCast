import React, { useContext } from 'react'
import Card from '../compounds/Card'
import { Newscontext } from '../context/Newscontext'

function Entertainment() {
    const {newsdata} = useContext(Newscontext);
  return (
    <div className='p-8'>
        <h1 className='text-red-600 mb-3 font-bold text-2xl'>Entertainment</h1>
        <hr />
        <div>
        <Card newstype={'Hollywood'} newsData={newsdata[3]} />
        </div>
       
    </div>
  )
}

export default Entertainment