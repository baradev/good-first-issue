import React from 'react'

export default function Page() {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col ml-32">
      <h1 className="text-8xl font-medium text-white mb-6 justify-start">
        Good First Issue
      </h1>
      <h3 className="text-2xl text-slate-400 text-mb-8 font-light justify-start">
        Grow yourself by giving back
      </h3>
      <div className="flex justify-start mt-20">
        <button
          className="hover:text-slate-500 text-white font-medium py-2 px-4 rounded-md mr-4 focus:outline-none focus:shadow-outline"
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
