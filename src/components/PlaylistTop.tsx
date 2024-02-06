import { Play } from 'lucide-react'
import Image from 'next/image';

interface PlaylistTopProps {
  title: string;
}

export function PlaylistTop({title} : PlaylistTopProps) {
  return (
    <div>
      <h1 className="font-semibold text-3xl mt-10">{title}</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
          <strong>Aerosmith - Nine Lives</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full grow-0 shrink-0 text-black ml-auto mr-4 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
          <strong>Aerosmith - Nine Lives</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full grow-0 shrink-0 text-black ml-auto mr-4 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
          <strong>Aerosmith - Nine Lives</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full grow-0 shrink-0 text-black ml-auto mr-4 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
          <strong>Aerosmith - Nine Lives</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full grow-0 shrink-0 text-black ml-auto mr-4 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
          <strong>Aerosmith - Nine Lives</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full grow-0 shrink-0 text-black ml-auto mr-4 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
          <strong>Aerosmith - Nine Lives</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full grow-0 shrink-0 text-black ml-auto mr-4 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>
    </div>
  );
}