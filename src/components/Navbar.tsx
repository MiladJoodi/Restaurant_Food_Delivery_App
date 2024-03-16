import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

function Navbar() {

  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between border-b-2 border-b-red-500 uppercase'>

      {/* Left Links */}
      <div className='hidden md:flex gap-4'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* Logo */}
      <div className='text-xl'>
        <Link href="/">Massimo</Link>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu />
      </div>

      {/* Right Link */}
      <div className='hidden md:flex gap-4'>
        <div>
          <Image src="/phone.png" alt='' />
        </div>
        {!user ? <Link href="/login">Login</Link> :
          <Link href="/orders">Orders</Link>}
        <CartIcon />
      </div>

    </div>
  )
}

export default Navbar