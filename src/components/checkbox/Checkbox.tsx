import React from 'react'

export default function Checkbox() {
  const checkboxes = [
    { name: 'Typescript', image: './typescript.png' },
    { name: 'React', image: './react.png' },
    { name: 'Next.js', image: './next.png' },
    { name: 'Tailwind', image: './tailwind.png' },
  ]

  return (
    <div>
      <h2>Choose your stack</h2>
      {checkboxes.map((checkbox, index) => (
        <label key={index}>
          <input type="checkbox" />
          {checkbox.name}
          {checkbox.image && <img src={checkbox.image} alt={checkbox.name} />}
        </label>
      ))}
    </div>
  )
}
