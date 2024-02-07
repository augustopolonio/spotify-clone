import {
  Play,
  Shuffle,
  SkipBackIcon,
  SkipForward,
  Repeat,
  Mic2,
  ListStart,
  MonitorSpeaker,
  Volume2,
  Minimize2,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-3 flex items-center justify-between">
      {/* Playing now */}
      <div className="flex items-center gap-3">
        <Image
          src="/Aerosmith_nine_lives.jpg"
          width={56}
          height={56}
          alt="Aerosmith - Nine Lives Album"
        ></Image>
        <div className="flex flex-col">
          <strong>Music Title</strong>
          <span className="text-xs text-zinc-500">Artist</span>
        </div>
      </div>

      {/* Player main buttons (center) */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-6">
          <button>
            <Shuffle size={20}></Shuffle>
          </button>
          <button>
            <SkipBackIcon size={20}></SkipBackIcon>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full pl-1 text-black">
            <Play></Play>
          </button>
          <button>
            <SkipForward size={20}></SkipForward>
          </button>
          <button>
            <Repeat size={20}></Repeat>
          </button>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-2">
          <span className="text-xm text-zinc-500">1:21</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-52 rounded-full bg-zinc-300"></div>
          </div>
          <span className="text-xm text-zinc-500">2:34</span>
        </div>
      </div>

      {/* Volume and buttons */}
      <div className="flex items-center gap-3">
        <button>
          <Mic2 size={18}></Mic2>
        </button>
        <button>
          <ListStart size={18}></ListStart>
        </button>
        <button>
          <MonitorSpeaker size={18}></MonitorSpeaker>
        </button>
        <button>
          <Volume2 size={18}></Volume2>
        </button>
        <div className="flex items-center gap-2">
          <div className="h-1 w-20 rounded-full bg-zinc-600">
            <div className="h-1 w-12 rounded-full bg-zinc-300"></div>
          </div>
        </div>
        <button>
          <Minimize2 size={18}></Minimize2>
        </button>
      </div>
    </footer>
  )
}
