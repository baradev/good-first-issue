import React from 'react'
import Image from 'next/image'

export default function Checkbox() {
  const checkboxes = [
    {
      name: 'Typescript',
      logo: './cdnlogo.com_typescript.svg',
    },
    { name: 'React', logo: './cdnlogo.com_react.svg' },
    { name: 'Next.js', logo: './cdnlogo.com_next-js.svg' },
    {
      name: 'Javascript',
      logo: './cdnlogo.com_javascript.svg',
    },
  ]

  return (
    <div className="flex flex-wrap justify-center">
      {checkboxes.map((checkbox, index) => (
        <div
          key={index}
          className="h-32 w-48 bg-base-100 max-w-xs rounded overflow-hidden shadow-lg m-4"
        >
          <div className="flex items-baseline justify-evenly mt-4 mb-4">
            <div className="ml-2 mr-2">
              <Image
                src={checkbox.logo}
                alt={checkbox.name}
                height={80}
                width={80}
              />
            </div>
            <div>
              <div className="cursor-pointer">
                <input
                  type="checkbox"
                  className="h-9 w-9 border-2 checkbox checkbox-secondary"
                />
              </div>
            </div>
          </div>
          <div className="font-bold text-lg flex items-center justify-center mt-6">
            {checkbox.name}
          </div>
        </div>
      ))}
    </div>
  )
}
