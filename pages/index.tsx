import Link from 'next/link'
import React from 'react'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

const IndexPage = () => {

  return (
    <div className="bg-black h-screen overflow-hidden text-gray-400">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export default IndexPage
