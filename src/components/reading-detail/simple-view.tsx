import { Star } from "lucide-react";
import type { Reading } from "../../types";
import IconButton from "../icon-button";
import useFavorites from "../../app-state/hooks/useFavorites";
import { toggleFavorite } from "../../utils/favorites-utils";
import useAppSettings from "../../app-state/hooks/useAppSettings";
import { cn } from "../../utils/cn";
import ShareButton from "../share-button";

type Props = {
  reading: Reading;
};

function SimpleView({ reading }: Props) {
  const [favorites, setFavorites] = useFavorites();
  const [settings] = useAppSettings();

  const alignment = settings.quoteAlign;

  function handleAddFavorite() {
    setFavorites(toggleFavorite(favorites, reading));
  }

  return (
    <div
      className={cn("text-center", {
        "text-left": alignment === "left",
        "text-center": alignment === "center",
        "text-right": alignment === "right",
        "text-justify": alignment === "justify",
      })}
    >
      <p style={{ fontSize: settings.quoteFontSize }} className="font-medium">
        {reading.readings[0].text}
      </p>
      <p className="pt-5 text-gray-400">{reading.readings[0].book}</p>
      <div className="inline-flex gap-5 pt-5 text-gray-400">
        {favorites.find((fav: Reading) => fav.date === reading.date) ? (
          <IconButton
            icon={
              <Star
                className="fill-amber-500 stroke-amber-500"
                onClick={handleAddFavorite}
              />
            }
          />
        ) : (
          <IconButton icon={<Star />} onClick={handleAddFavorite} />
        )}
        <ShareButton
          shareOptions={{
            title: reading.readings[0].book,
            text: `${reading?.readings[0].text}\n\n - ${reading?.readings[0].book}`,
            dialogTitle: "Share verse",
          }}
        />
      </div>
    </div>
  );
}

export default SimpleView;
