import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { UserIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { shuffle } from "lodash"
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../atoms/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import Songs from './Songs';
import Player from './Player';

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

const Center = () => {

  const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [])

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data) => {
      setPlaylist(data.body)
    }).catch((err) => console.log("Something went wrong!", err))
  }, [spotifyApi, playlistId])

  console.log(playlist)

  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">

          <div className="bg-gray-800 p-2 rounded-full">
            {session?.user?.image ? (
              <img className="rounded-full w-10 h-10"
                src={session?.user?.image}
                alt=""
              />
            ) : (
              <UserIcon className="w-7 h-7" />
            )}
          </div>

          <div>{session?.user?.name}</div>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>

      <section className={`w-full text-white`}>

        <div className={`bg-gradient-to-b to-black ${color}`}>
          <div className={`flex items-end space-x-7 p-8`}>
            <img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0]?.url} alt="" />
            <div className="">
              <p>PLAYLIST</p>
              <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
                {playlist?.name}
              </h1>
            </div>
          </div>
        </div>


        <Songs />
      </section>

      <Player />
    </div>
  )
}

export default Center
