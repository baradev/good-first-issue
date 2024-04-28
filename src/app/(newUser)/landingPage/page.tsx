import React from 'react'

export default function Page() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 lg:mt-24 max-w-7xl">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium text-white mb-4 sm:mb-6 lg:mb-8">
        Good First Issue
      </h1>
      <h3 className="text-lg sm:text-xl lg:text-2xl text-slate-400 mb-6 sm:mb-8 font-light">
        Grow yourself by giving back
      </h3>
      <div className="flex flex-col sm:flex-row justify-start">
        <button
          className="hover:text-slate-500 text-white font-medium py-2 px-4 rounded-md mb-2 sm:mb-0 mr-0 sm:mr-4 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <button
          className="hover:text-slate-500 text-white font-medium py-2 px-4 rounded-md border-2 border-fuchsia-500 hover:border-fuchsia-300 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
