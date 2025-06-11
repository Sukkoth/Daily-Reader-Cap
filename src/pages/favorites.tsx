import useFavorites from "../app-state/hooks/useFavorites";
import type { Reading } from "../types";
import { removeFavorite } from "../utils/favorites-utils";
import NoFavorites from "../components/no-favorites";
import FavoritesList from "../components/favorites-list";

function Favorites() {
  const [favorites, setFavorites] = useFavorites();

  function handleRemoveFavorite(favorite: Reading) {
    setFavorites(removeFavorite(favorites, favorite));
  }

  return (
    <div className="flex h-[92.5dvh] flex-col p-5">
      <h1 className="text-2xl font-medium">Favorites</h1>
      <p className="pt-2 text-gray-400">Your saved verses</p>

      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <div className="mt-5">
          <FavoritesList
            favorites={favorites}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        </div>
      )}
    </div>
  );
}

export default Favorites;
