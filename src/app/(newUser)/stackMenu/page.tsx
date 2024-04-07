import Checkbox from '@/components/checkbox/Checkbox'
import React from 'react'

export default function StackMenu() {
  return (
    <div className="mt-48">
      <h1 className="flex text-4xl font-medium mb-16 text-white justify-center">
        Choose your stack
      </h1>
      <div>
        <Checkbox />
        <div className="flex justify-end mr-20 mt-20">
          <button className="btn">Save</button>
        </div>
      </div>
    </div>
  )
}
