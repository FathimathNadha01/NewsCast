import React, { useContext } from 'react'
import { Newscontext } from '../context/Newscontext'
import Cardt from './Cardt'
import Cardnew from './Cardnew'
import Card from './Card'

function Dontmiss() {
    const {newsdata} = useContext(Newscontext)
    
  return (
    <div className='p-8'>
        <h1 className='text-red-500 text-2xl'>Don't Miss</h1>
        <hr />
    
        <div className='flex flex-wrap  gap-5 lg:flex-nowrap '>
        <Cardt colour={"bg-violet-400"} newsData={newsdata[8]}/>
        <div>
        <Cardnew newsData={newsdata[7]}/>
        <Cardnew newsData={newsdata[3]}/>
        <Cardnew newsData={newsdata[5]}/>
        <Cardnew newsData={newsdata[2]}/>
        </div>
        </div>
    </div>
  )
}

export default Dontmiss