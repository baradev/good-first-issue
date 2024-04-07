import Link from 'next/link'
import React from 'react'

export default function Links() {
  const links = [{ title: 'Dashboard', path: '/dashboard' }]

  return (
    <div>
      {links.map((link, index) => (
        <Link key={index} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  )
}
