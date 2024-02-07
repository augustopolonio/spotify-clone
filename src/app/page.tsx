import { Footer } from '@/components/Footer'
import { NavButtons } from '@/components/NavButtons'
import { Playlists } from '@/components/Playlists/Playlists'
import { TopPlaylists } from '@/components/Playlists/TopPlaylists'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <NavButtons />
          <TopPlaylists title="Good afternoon" />
          <Playlists title="Recommended for you" />
          <Playlists title="Recommended for you 2" />
          <Playlists title="Recommended for you 3" />
        </main>
      </div>

      <Footer />
    </div>
  )
}
