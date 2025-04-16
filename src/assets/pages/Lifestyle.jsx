import React, { useContext } from 'react'
import Cardt from '../compounds/Cardt'
import { Newscontext } from '../context/Newscontext'

function Lifestyle() {
    const {entertainment} = useContext(Newscontext);
  return (
    <div className='p-8'>
        <h1 className='font-bold text-2xl text-red-600 mb-3'>Lifestyle</h1>
        <hr />
        <div className='flex flex-wrap lg:flex-nowrap'>
        <Cardt colour={"bg-red-600"} newstype={"Health&Fitness"} newsData={entertainment[0]}/>
        <Cardt colour={"bg-yellow-600"} newstype={"Health&Fitness"} newsData={entertainment[1]}/>
        </div>
    </div>
  )
}

export default Lifestyle