import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import SpotifyWebApi from "spotify-web-api-node"

interface SessionUser {
  name?: string;
  email?: string;
  image?: string;
  accessToken?: string;
}

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});

const useSpotify = () => {
  const { data: session } = useSession()

  useEffect(() => {
    console.log(session)
    if (session) {
      if (session.error === 'RefreshAccessTokenError') {
        signIn()
      }
    }
  }, [session])

  if (session && session.user) {
    const user: SessionUser = session.user
    spotifyApi.setAccessToken(user.accessToken)
  }

  return spotifyApi

}

export default useSpotify
