import React from 'react'
import NewRelease from '../NewRelease';
import PopularSongs from '../PopularSongs';
import YourMusicTuner from '../YourMusicTuner';

const SongsPage = () => {
  return (
    <div className="md:pl-8">
      <h1 className="text-center text-[40px] font-bold">Songs Page</h1>
      <NewRelease />
      <PopularSongs />
      <YourMusicTuner />
    </div>
  );
}

export default SongsPage;