"use client";

import { useState } from "react";
import { Artist } from "../../components/types";
import { artistsData } from "../../components/data";
import ArtistCard from "../../components/card";
import Navbar from "../../components/navbar";

export default function ArtistsPage() {
  // The array stores favorited artists
  const [favorites, setFavorites] = useState<Artist[]>([]);
  //If user click "add to favorite button, the heart emoji appears at the corner of card"
  const addToFavorites = (artist: Artist) => {
    setFavorites([...favorites, artist]);
  };
  //User also can remove the heart emoji
  const removeFromFavorites = (artist: Artist) => {
    setFavorites(favorites.filter((fav) => fav.id !== artist.id));
  };
  //This is to check if an artist is in favorites or not
  const isFavorite = (artist: Artist) => {
    return favorites.some((fav) => fav.id === artist.id);
  };

  return (
    <div>
      
      <main style={{ padding: 20 }}>
        <h1 style={{fontSize:'2rem'}}>All Artists</h1>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 20 ,
          justifyContent: 'center'
        }}>
          {artistsData.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={isFavorite(artist)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}