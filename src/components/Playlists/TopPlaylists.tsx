import { TopPlaylist } from './TopPlaylist'

interface TopPlaylistsProps {
  title: string
}

export function TopPlaylists({ title }: TopPlaylistsProps) {
  return (
    <div>
      <h1 className="font-semibold text-3xl mt-10">{title}</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
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
