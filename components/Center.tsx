import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { UserIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { shuffle } from "lodash"

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
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [])

  console.log(color)

  console.log(session)

  return (
    <div className="flex flex-grow">
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

      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 w-full text-white p-8`}>
        <h1>Hello</h1>
      </section>
    </div>
  )
}

export default Center
