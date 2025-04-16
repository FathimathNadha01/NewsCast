import React from 'react'
import Hero from '../compounds/Hero'
import Entertainment from './Entertainment'
import Cardt from '../compounds/Cardt'
import Cardnew from '../compounds/Cardnew'
import Dontmiss from '../compounds/Dontmiss'
import Sports from './Sports'
import Lifestyle from './Lifestyle'

function Home() {
  return (
    <div>
      <Hero/>
      
      <Dontmiss/>
      
      <Entertainment/>
      <Sports/>
      <Lifestyle/>

    </div>
  )
}

export default Home