import React, { useEffect, useState } from 'react'
import { HomeIcon, LibraryIcon, SearchIcon, PlusCircleIcon, HeartIcon, RssIcon } from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
import useSpotify from "../hooks/useSpotify"
import { playlistIdState } from '../atoms/playlistAtom'
import { useRecoilState } from 'recoil'

const Sidebar = () => {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  console.log(session)

  useEffect(() => {
    console.log(spotifyApi)
    console.log(spotifyApi.getAccessToken())
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        console.log(data)
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  console.log(playlists)

  return (
    <div className="p-4 px-8 bg-black text-gray-400 text-sm border-r border-gray-400 h-screen overflow-y-scroll scrollbar-hide max-w-[8rem] md:hidden">
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
        {playlists.map((playlist) =>
          <p key={playlist.id} onClick={() => setPlaylistId(playlist.id)} className={`cursor-pointer hover:text-white ${playlist.id === playlistId && 'text-white'}`}>
            {playlist.name}
          </p>
        )}
      </div>


    </div>
  )
}

export default Sidebar
