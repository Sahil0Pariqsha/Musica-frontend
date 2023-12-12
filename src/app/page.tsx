import Hero from "@/components/Hero";
import NewRelease from "@/components/NewRelease";
import PopularSongs from "@/components/PopularSongs";
import YourMusicTuner from "@/components/YourMusicTuner";

export default function Home() {
  return (
    <div className="w-full md:pl-6 pr-0">
      {/* <Header /> */}
      <Hero />
      <NewRelease />
      <PopularSongs />
      <YourMusicTuner />
    </div>
  );
}
