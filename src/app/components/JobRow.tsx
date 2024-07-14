import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function JobRow() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm relative">
        <div className='absolute cursor-pointer top-4 right-6'>
            <FontAwesomeIcon className='size-5 text-gray-200' icon={faHeart}/>
        </div>
        <div className='flex grow gap-4'>
        <div className='content-center'>
            <img className='size-12' src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-transparent-spotify-logo-images-25.png'></img>
        </div>
        <div className='grow md:flex'>
            <div className='grow'>
            <div className='text-gray-500 text-sm'>Spotify</div>
            <div className='font-bold text-lg mb-1'>Product Designer</div>
            <div className='text-gray-400 text-sm'>Remote &middot; New Delhi, INDIA &middot; Full-time</div>
            </div>
            <div className='content-end text-gray-500 text-sm'>
            2 weeks ago
        </div>
        </div>
        

        </div>
       
        
        
    </div>

  )
}

export default JobRow