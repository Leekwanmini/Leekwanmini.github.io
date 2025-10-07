"use client";

import { useState } from "react";
import { Artist } from "../../components/types";
import { artistsData } from "../../components/data";
import ArtistCard from "../../components/card";

export default function UKGArtistsPage() {
  const [favorites, setFavorites] = useState<Artist[]>([]);
  
  const UKGArtists = artistsData.filter((artist) => artist.genre === "UKG");

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
        <h1 style={{fontSize:'2rem'}}>UKG Artists</h1>
        
        {UKGArtists.length === 0 ? (
          <p>No UKG artists found</p>
        ) : (
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 20 ,
            justifyContent: 'center'
          }}>
            {UKGArtists.map((artist) => (
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