import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header  >
          <div className=" container flex items-center justify-between mx-auto my-4">
          <Link href={'/'} className="font-bold text-xl">CareerSphere</Link>
          <nav className="flex gap-4   *:py-2 *:px-4 *:rounded-md" >
          <Link className="*:bg-gray-200" href={'/login'} >Login</Link> 
          <Link className="bg-blue-600 text-white" href={'/new-listing'}>Post A Job</Link>
        </nav>
        </div>
        </header>
  )
}

export default Header