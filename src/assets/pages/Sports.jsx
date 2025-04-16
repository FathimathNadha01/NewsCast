import React, { useContext } from 'react'
import Card from '../compounds/Card'
import Cardt from '../compounds/Cardt'
import { Newscontext } from '../context/Newscontext'
import Cardnew from '../compounds/Cardnew';

function Sports() {
    const {newsdata} = useContext(Newscontext);
  return (
    <div className='p-8'>
        <h1 className='font-bold text-red-600 text-2xl mb-3'>Sports</h1>
        <hr />
        <div className='flex flex-wrap lg:flex-nowrap gap-5'>
        <Cardt colour={"bg-green-500"} newstype={"Cricket"} newsData={newsdata[2]} />
    
        <div>
        <Cardnew newsData={newsdata[3]}/>
        <Cardnew newsData={newsdata[4]}/>
        <Cardnew newsData={newsdata[5]}/>
        <Cardnew newsData={newsdata[6]}/>
        <Cardnew newsData={newsdata[7]}/>
        </div>
        </div>
    </div>
  )
}

export default Sports