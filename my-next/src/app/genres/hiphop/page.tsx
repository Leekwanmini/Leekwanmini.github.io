"use client";

import { useState } from "react";
import { Artist } from "../../components/types";
import { artistsData } from "../../components/data";
import ArtistCard from "../../components/card";

export default function HipHopArtistsPage() {
  const [favorites, setFavorites] = useState<Artist[]>([]);
  
  const hipHopArtists = artistsData.filter((artist) => artist.genre === "hiphop");

  const addToFavorites = (artist: Artist) => {
    setFavorites([...favorites, artist]);
  };

  const removeFromFavorites = (artist: Artist) => {
    setFavorites(favorites.filter((fav) => fav.id !== artist.id));
  };

  const isFavorite = (artist: Artist) => {
    return favorites.some((fav) => fav.id === artist.id);
  };

  return (
    <div>
      
      <main style={{ padding: 20 }}>
        <h1 style={{fontSize:'2rem'}}>Hip-Hop Artists</h1>
        
        {hipHopArtists.length === 0 ? (
          <p>No Hip-Hop artists found.</p>
        ) : (
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 20 ,
            justifyContent: 'center'
          }}>
            {hipHopArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={isFavorite(artist)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}