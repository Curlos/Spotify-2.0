import React from 'react'
import { HomeIcon, LibraryIcon, SearchIcon, PlusCircleIcon, HeartIcon, RssIcon } from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

const Sidebar = () => {
  const { data: session, status } = useSession()

  console.log(session)

  return (
    <div className="p-4 text-gray-400 text-sm">
      <div className="space-y-4 mb-6">
        <button className="flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
          <HomeIcon className="h-5 w-5" />
          <p>Log out</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
      </div>

      <div className="space-y-2 mb-6">
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>
      </div>

      <div className="space-y-2 mb-6">
        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <p>Playlist name...</p>
        </button>
      </div>


    </div>
  )
}

export default Sidebar
