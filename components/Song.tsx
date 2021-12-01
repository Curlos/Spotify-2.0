import { useRecoilState } from "recoil"
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom"
import useSpotify from "../hooks/useSpotify"
import { millisToMinutesAndSeconds } from "../lib/time"

interface Props {
  track: any,
  order: any
}

const Song = ({ track, order }: Props) => {
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const playSong = async () => {
    setCurrentTrackId(track.track.id)
    setIsPlaying(true)
    spotifyApi.play({
      uris: [track.track.uri],
    })
  }

  const getArtists = (artists) => {
    const artistsArr = []

    artists.map((artist) => {
      artistsArr.push(artist.name)
    })

    return artistsArr.join(', ')
  }

  return (
    <div className="grid grid-cols-2 py-4 px-5 rounded-lg hover:bg-gray-900 cursor-pointer text-sm md:text-base" onClick={playSong}>
      <div className="flex items-center space-x-4 w-64">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={track.track.album.images[0].url} alt="" />
        <div className="w-full">
          <p className={`w-full text-white truncate ${currentTrackId === track.track.id ? "text-green-500" : "text-white"}`}>{track.track.name}</p>
          <p className="w-full text-gray-400 truncate">
            {getArtists(track.track.artists)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-7 ml-auto md:ml-0">
        <p className="w-40 truncate">{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song
