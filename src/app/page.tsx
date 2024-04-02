import React from 'react'

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg bg-white py-12 px-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Good First Issue</h1>
        <h3 className="text-lg mb-8">Grow yourself by giving back</h3>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
