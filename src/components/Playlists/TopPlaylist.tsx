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
      className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
    >
      <Image src={src} alt="Aerosmith album" width={104} height={104}></Image>
      <strong>{title}</strong>
      <button className="invisible ml-auto mr-4 flex h-12 w-12 shrink-0 grow-0 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
        <Play />
      </button>
    </a>
  )
}
