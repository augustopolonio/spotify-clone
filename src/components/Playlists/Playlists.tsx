import { Playlist } from './Playlist'

interface PlaylistsProps {
  title: string
}

export function Playlists({ title }: PlaylistsProps) {
  return (
    <div>
      <h2 className="mt-10 text-2xl font-semibold">{title}</h2>

      <div className="mt-4 grid grid-cols-5 gap-4">
        <Playlist
          title="Daily Mix 1"
          src="/Aerosmith_nine_lives.jpg"
          description={"Guns N' Roses, Great White, Aerosmith and more"}
        />
        <Playlist
          title="Daily Mix 2"
          src="/Aerosmith_nine_lives.jpg"
          description={'John Mayer, The Corrs, The Cardigans and more'}
        />
        <Playlist
          title="Daily Mix 3"
          src="/Aerosmith_nine_lives.jpg"
          description={'Tom Petty, Bob Seger, Eric Clapton and more'}
        />
        <Playlist
          title="Good Vibes"
          src="/Aerosmith_nine_lives.jpg"
          description={'Just good vibes all day long'}
        />
      </div>
    </div>
  )
}
