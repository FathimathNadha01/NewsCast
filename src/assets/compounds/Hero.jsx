import React, { useContext } from 'react'

import Card from './Card'
import { Newscontext } from '../context/Newscontext'

function Hero() {
  const {newsdata,entertainment} = useContext(Newscontext);

  return (

<div className="grid grid-cols-1  lg:grid-cols-2  lg:grid-rows-4 gap-4 p-8">
    <div className="row-span-2"><Card   newsData={newsdata[0]} /></div>
    <div className="row-span-2 lg:col-start-1 lg:row-start-3"><Card newsData={entertainment[1]}/></div>
    <div className="row-span-2 lg:col-start-2 lg:row-start-1"><Card newsData={entertainment[0]}/></div>
    <div className="row-span-2 lg:col-start-3 lg:row-start-1"><Card newsData={entertainment[4]}/></div>
    <div className="lg:col-span-2 row-span-2 lg:row-start-3"><Card newsData={entertainment[4]}/></div>
</div>

    


    
    
    
  )
}

export default Hero

