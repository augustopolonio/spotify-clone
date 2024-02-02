import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Good Vibes</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Night Moves</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Full Moon Fever</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Grand Theft Auto Radio</a>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
              <strong>Aerosmith - Nine Lives</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>              
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
              <strong>Aerosmith - Nine Lives</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>              
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
              <strong>Aerosmith - Nine Lives</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>              
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
              <strong>Aerosmith - Nine Lives</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>              
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
              <strong>Aerosmith - Nine Lives</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>              
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/Aerosmith_nine_lives.jpg" alt="Aerosmith album" width={104} height={104}></Image>
              <strong>Aerosmith - Nine Lives</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>              
            </a>
          </div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
