import { Artist } from "./types";
import { useState } from "react";
import styles from "./card.module.css";

type ArtistCardProps = {
  artist: Artist;
  addToFavorites: (artist: Artist) => void;
  removeFromFavorites: (artist: Artist) => void;
  isFavorite?: boolean;
};

export default function ArtistCard({
  artist,
  addToFavorites,
  removeFromFavorites,
  isFavorite = false, // Default value is false. The heart will appear when it turns to true.
}: ArtistCardProps) {
  
  const [showBio, setShowBio] = useState(false);
  //Event handler for toggling bio
  function handleClick() {
    setShowBio(!showBio);
  }

  return (
    <div className={styles.artistCard}>
      {isFavorite && (
        <div className={styles.heartIcon}>
          ❤️
        </div>
      )}
      
      <img
        className={styles.artistImage}
        src={artist.image}
        alt={artist.name}
      />
      <div className={styles.artistName}>
        {artist.name}
      </div>
      <div className={styles.artistGenre}>{artist.genre}</div>
      <div className={styles.artistPopularity}>Popularity: {artist.popularity}/10</div>
      
      {showBio && (
        <div className={styles.artistBio}>
          {artist.bio}
        </div>
      )}
      
      <button
        className={styles.bioButton}
        onClick={handleClick}// Event handler attached here
      >
        {showBio ? "Hide Bio" : "Show Bio"/*The button flip between hide and show */}
      </button>
      
      <button
        className={styles.favoriteButton}
        onClick={() =>
          isFavorite ? removeFromFavorites(artist) : addToFavorites(artist)
        }
      >
        {isFavorite ? "Remove From Favorites" : "Add to Favorites" /*The button flip between hide and show */}
      </button>
    </div>
  );
}