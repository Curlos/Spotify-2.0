import { FastForwardIcon, PauseIcon, PlayIcon, ReplyIcon, RewindIcon, SwitchHorizontalIcon, VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import useSongInfo from '../hooks/useSongInfo'
import useSpotify from '../hooks/useSpotify'
import { debounce } from 'lodash'

const Player = () => {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volume, setVolume] = useState(50)

  const songInfo = useSongInfo()

  console.log(songInfo)

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log('Now playing: ', data?.body?.item)
        setCurrentTrackId(data?.body?.item?.id)

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing)
        })
      })
    }
  }

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      console.log(data)
      if (data.body._is_playing) {
        // spotifyApi.pause()
        spotifyApi.playing = !(spotifyApi.playing)
        setIsPlaying(false)
      } else {
        // spotifyApi.play()
        setIsPlaying(true)
      }
    })
  }

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      // fetch song info
      fetchCurrentSong()
      setVolume(50)
    }
  }, [currentTrackIdState, spotifyApi, session])

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume)
    }
  }, [volume])

  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((err) => { })
    }, 200),
    [])

  return (
    <div className="h-18 bg-gradient-to-b from-black to-gray-900 text-white bottom-0 left-0 fixed w-screen p-4 grid grid-cols-3">
      <div className="flex xl:block space-x-2 xl:space-x-0">
        <div>
          <img
            className="md:inline h-12 w-12"
            src={songInfo?.album?.images?.[0]?.url}
            alt=""
          />
        </div>

        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <SwitchHorizontalIcon className="button" />

        <RewindIcon
          onClick={() => spotifyApi.skipToPrevious()}
          className="button"
        />

        {isPlaying ? (
          <PauseIcon
            onClick={handlePlayPause}
            className="button h-10 w-10" />
        ) : (
          <PlayIcon
            onClick={handlePlayPause}
            className="button h-10 w-10" />
        )}

        <FastForwardIcon
          onClick={() => spotifyApi.skipToNext()}
          className="button"
        />

        <ReplyIcon className="button" />
      </div>

      <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
        <VolumeOffIcon
          onClick={() => volume > 0 && setVolume(volume - 10)}
          className="button" />
        <input
          className="w-14 md:w-28"
          type="range"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          min={0}
          max={100}
        />
        <VolumeUpIcon
          onClick={() => volume < 100 && setVolume(volume + 10)}
          className="button" />
      </div>


    </div>
  )
}

export default Player

