import { Footer } from '@/components/Footer';
import { NavButtons } from '@/components/NavButtons';
import { Playlist } from '@/components/Playlist';
import { PlaylistTop } from '@/components/PlaylistTop';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">        
        
        <Sidebar />

        <main className="flex-1 p-6">
          <NavButtons />          
          <PlaylistTop title="Good afternoon" />
          <Playlist title="Recommended for you" />
          <Playlist title="Recommended for you 2" />
          <Playlist title="Recommended for you 3" />
        </main>
      </div>

      <Footer />      
      
    </div>
  );
}
