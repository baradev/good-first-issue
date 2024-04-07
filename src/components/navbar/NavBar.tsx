import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="text-white mb-52 ml-10 pt-20 flex items-center">
      <Link href="/">Logo</Link>
      <div className="ml-20">
        <Links />
      </div>
    </div>
  )
}
