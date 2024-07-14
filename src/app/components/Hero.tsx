import React from 'react'

function Hero() {
  return (
    <section className='container my-16 '>
        <h1 className='text-4xl font-bold text-center'>Find your next <br/>dream job</h1>
        {/* <p className='text-center text-gray-700 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, perferendis. Amet numquam quo voluptate vel debitis? Id vel error quod similique harum dolore consequuntur molestiae animi vitae quam, delectus perferendis in perspiciatis aliquam alias eveniet inventore, excepturi est velit beatae consectetur. Laborum illum a eveniet pariatur nisi dicta id veritatis?</p> */}
        <form className='flex gap-2 mt-4 max-w-md mx-auto'>
            <input type="search" className='border border-gray-400 w-full py-2 px-3 rounded-md' placeholder='Search phrases...' />
            <button className='bg-blue-600 text-white py-2 px-4 rounded-md'>Search</button>
        </form>
    </section>
  )
}

export default Hero