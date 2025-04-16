import React from 'react'
import icons from '../icons/Icons'

function Header() {
  return (
    <div>
        <div>
            <img src={icons.newsic}></img>
        </div>
        <div className='flex overflow-auto gap-4 bg-gray-700 text-white text-2xl p-3 mt-5'>
            <p className='bg-red-500'>Home</p>
            <p>International</p>
            <p>Sports</p>
            <p>Opinion</p>
            <p>Business</p>
            <p>Youth</p>
            <p>Entertainment</p>
            <p>Lifestyle</p>
            <p>Pages</p>
        </div>
    </div>
  )
}

export default Header