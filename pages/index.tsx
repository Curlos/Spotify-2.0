import Link from 'next/link'
import React from 'react'
import Center from '../components/Center'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'

const IndexPage = () => {

  return (
    <div className="bg-black h-screen overflow-hidden text-gray-400">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <Player />
    </div>
  )
}

export default IndexPage
