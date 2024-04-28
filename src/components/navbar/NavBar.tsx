import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="bg-slate-200">
      <div className="text-black mb-10 ml-10 pt-20 flex items-center">
        <Link href="/">Logo</Link>
        <div className="ml-20">
          <Links />
        </div>
      </div>
      <hr className="border-black my-4 w-full mb-44" />
    </div>
  )
}
