import Link from 'next/link'
import React from 'react'
import Sidebar from '../components/Sidebar'

const IndexPage = () => {

  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <Sidebar />
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export default IndexPage
