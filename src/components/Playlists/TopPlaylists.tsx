import { TopPlaylist } from './TopPlaylist'

interface TopPlaylistsProps {
  title: string
}

export function TopPlaylists({ title }: TopPlaylistsProps) {
  return (
    <div>
      <h1 className="mt-10 text-3xl font-semibold">{title}</h1>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <TopPlaylist
          src="/Aerosmith_nine_lives.jpg"
          title="Aerosmith - Nine Lives"
        />
        <TopPlaylist
          src="/Aerosmith_nine_lives.jpg"
          title="Aerosmith - Nine Lives"
        />
        <TopPlaylist
          src="/Aerosmith_nine_lives.jpg"
          title="Aerosmith - Nine Lives"
        />
        <TopPlaylist
          src="/Aerosmith_nine_lives.jpg"
          title="Aerosmith - Nine Lives"
        />
        <TopPlaylist
          src="/Aerosmith_nine_lives.jpg"
          title="Aerosmith - Nine Lives"
        />
      </div>
    </div>
  )
}
