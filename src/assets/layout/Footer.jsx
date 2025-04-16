import React from 'react'
import icons from '../icons/Icons'
import images from '../images/Images'

function Footer() {
  return (
    <div className=' grid-cols-1 lg:grid lg:grid-cols-4 gap-3 bg-gray-700 text-white p-6'>
        <div>
            <img src={icons.newsict}></img>
            <p>Lorem ipsum dolor, sit amet consectetur <br />elit. Neque, amet.  Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.</p>
            <div className='flex gap-3'>
            <img className='bg-blue-600 rounded-2xl' src={icons.facebook}></img>
            <img className='bg-violet-400 rounded' src={icons.insta}></img>
            <img className='bg-blue-400 rounded-2xl' src={icons.twitter}></img>
            <img className='bg-red-400 rounded-2xl' src={icons.youtube}></img>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Photo Gallery</h1>
            <hr />
            <div className='flex mt-3 gap-1'>
            <img src={images.imageo}></img>
            <img src={images.imaget}></img>
            <img src={images.imageth}></img>
            </div>
            <div className='flex mt-3 gap-1'>
            <img src={images.imagef}></img>
            <img src={images.imagefi}></img>
            <img src={images.imagesi}></img>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Tags</h1>
            <hr />
            <div className='flex mt-4 gap-2 '>
            <p className='bg-red-400 p-1'>Football</p>
            <p className='bg-blue-400 p-1'>Cricket</p>
            <p className='bg-violet-500 p-1'>Covid 19</p>
            <p className='bg-amber-700 p-1 '>Life Style</p>
            </div>
            <div className='flex mt-4 gap-2 p-1'>
            <p className='bg-red-300 p-1'>Trending News</p>
            <p className='bg-blue-400 p-1'>Technology</p>
            <p className='bg-blue-300 p-1'>Travel</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Stay In Touch</h1>
            <hr />
            <p className='mt-4'>To be updated with all the latest news,offers and special announcements</p>
            <input type="text" placeholder='Your email address' className='border-1 mt-4 bg-white w-full py-2 text-black' /> <br />
            <button className='bg-red-600 w-full mt-4 py-2'>Subscribe</button>
        </div>
    </div>
  )
}

export default Footer