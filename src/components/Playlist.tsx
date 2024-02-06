import Image from 'next/image';

interface PlaylistProps {
  title: string;
}

export function Playlist({title}: PlaylistProps) {
  return (
    <div>
      <h2 className="font-semibold text-2xl mt-10">{title}</h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/Aerosmith_nine_lives.jpg" className="w-full" width={120} height={120} alt="Aerosmith - Nine Lives Album"></Image>
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="font text-sm text-zinc-400">{'Guns N\' Roses, Great White, Aerosmith and more'} </span>
        </a>
        <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/Aerosmith_nine_lives.jpg" className="w-full" width={120} height={120} alt="Aerosmith - Nine Lives Album"></Image>
          <strong className="font-semibold">Daily Mix 2</strong>
          <span className="font text-sm text-zinc-400">John Mayer, The Corrs, The Cardigans and more</span>
        </a>
        <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/Aerosmith_nine_lives.jpg" className="w-full" width={120} height={120} alt="Aerosmith - Nine Lives Album"></Image>
          <strong className="font-semibold">Daily Mix 3</strong>
          <span className="font text-sm text-zinc-400">Tom Petty, Bob Seger, Eric Clapton and more</span>
        </a>
        <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/Aerosmith_nine_lives.jpg" className="w-full" width={120} height={120} alt="Aerosmith - Nine Lives Album"></Image>
          <strong className="font-semibold">Good Vibes</strong>
          <span className="font text-sm text-zinc-400">Just good vibes all day long</span>
        </a>
      </div>
    </div>
  );
}