import Image from 'next/image'
import { Play } from 'lucide-react'

interface TopPlaylistProps {
  title: string
  src: string
}

export function TopPlaylist({ title, src }: TopPlaylistProps) {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image src={src} alt="Aerosmith album" width={104} height={104}></Image>
      <strong>{title}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full grow-0 shrink-0 text-black ml-auto mr-4 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  )
}
