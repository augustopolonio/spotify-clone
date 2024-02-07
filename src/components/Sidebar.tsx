import { Home as HomeIcon, Search, Library } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

      <nav className="mt-10 space-y-5">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your library
        </a>
      </nav>

      <nav className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-10">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Good Vibes
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Night Moves
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Full Moon Fever
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Grand Theft Auto Radio
        </a>
      </nav>
    </aside>
  )
}
