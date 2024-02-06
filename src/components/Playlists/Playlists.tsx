import Image from 'next/image';
import { Playlist } from './Playlist';

interface PlaylistsProps {
  title: string;
}

export function Playlists({title}: PlaylistsProps) {
  return (
    <div>
      <h2 className="font-semibold text-2xl mt-10">{title}</h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <Playlist title="Daily Mix 1" src="/Aerosmith_nine_lives.jpg" description={'Guns N\' Roses, Great White, Aerosmith and more'}/>
        <Playlist title="Daily Mix 2" src="/Aerosmith_nine_lives.jpg" description={'John Mayer, The Corrs, The Cardigans and more'}/>
        <Playlist title="Daily Mix 3" src="/Aerosmith_nine_lives.jpg" description={'Tom Petty, Bob Seger, Eric Clapton and more'}/>
        <Playlist title="Good Vibes" src="/Aerosmith_nine_lives.jpg" description={'Just good vibes all day long'}/>
      </div>
    </div>
  );
}