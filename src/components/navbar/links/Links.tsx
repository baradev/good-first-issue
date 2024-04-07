import Link from 'next/link'
import React from 'react'

export default function Links() {
  const links = [
    { title: 'Dashboard', path: '/' },
    { title: 'Profile', path: '/userProfile' },
  ]

  return (
    <div>
      {links.map((link, index) => (
        <Link className="ml-20" key={index} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  )
}
