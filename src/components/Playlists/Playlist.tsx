import Image from 'next/image'

interface PlaylistProps {
  title: string
  src: string
  description: string
}

export function Playlist({ title, src, description }: PlaylistProps) {
  return (
    <a
      href="#"
      className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
    >
      <Image
        src={src}
        className="w-full"
        width={120}
        height={120}
        alt="Aerosmith - Nine Lives Album"
      ></Image>
      <strong className="font-semibold">{title}</strong>
      <span className="font text-sm text-zinc-400">{description} </span>
    </a>
  )
}
