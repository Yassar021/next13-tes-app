import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-blue-500'>
      <Link href={'/'} className='px-2 py-1 font-bold text-blue-500 bg-white rounded-lg'>Home</Link>
      <Link href={'/search'} className='px-2 py-1 mx-4 font-bold text-blue-500 bg-white rounded-lg'>Search</Link>
      <Link href={'/todos'} className='px-2 py-1 font-bold text-blue-500 bg-white rounded-lg'>Todos</Link>
    </header>
  )
}

export default Header