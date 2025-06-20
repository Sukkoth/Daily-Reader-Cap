import { Star } from "lucide-react";
import type { Reading, ReadingItem } from "../../types";
import IconButton from "../icon-button";
import useFavorites from "../../app-state/hooks/useFavorites";
import { toggleFavorite } from "../../utils/favorites-utils";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import { cn } from "../../utils/cn";
import useAppSettings from "../../app-state/hooks/useAppSettings";
import ShareButton from "../share-button";

type Props = {
  reading: Reading;
};

function LongerView({ reading }: Props) {
  const [favorites, setFavorites] = useFavorites();
  const [settings] = useAppSettings();

  const alignment = settings.articleAlign;

  function handleAddFavorite(readingItem: ReadingItem) {
    const readingPrepared = {
      date: reading.date,
      readings: [readingItem],
    } as Reading;

    setFavorites(toggleFavorite(favorites, readingPrepared));
  }

  function getPart(index: number) {
    switch (index) {
      case 0:
        return "Old Testament";
      case 1:
        return "New Testament";
      case 2:
        return "Gospel";
    }
  }
  const todaysFavorites = favorites.filter(
    (fav: Reading) => fav.date === reading.date,
  );

  useScrollToHash();

  return (
    <div className="space-y-10 pt-5 pb-16">
      {reading.readings.map((readingItem, index) => (
        <div className="scroll-mt-[20px]" key={index} id={readingItem.book}>
          <p className="text-gray-400">{getPart(index)}</p>
          <div className="flex items-center justify-between">
            <h1 className="text-[26px] font-medium">{readingItem.book}</h1>
            <div className="inline-flex gap-2">
              {todaysFavorites.find(
                (fav) => fav.readings[0].book === readingItem.book,
              ) ? (
                <IconButton
                  icon={
                    <Star
                      className="fill-amber-500 stroke-amber-500"
                      onClick={() => handleAddFavorite(readingItem)}
                    />
                  }
                />
              ) : (
                <IconButton
                  icon={<Star className="text-gray-400" />}
                  onClick={() => handleAddFavorite(readingItem)}
                />
              )}
              <ShareButton
                shareOptions={{
                  title: readingItem.book,
                  text: `${readingItem.text}\n\n - ${readingItem.book}`,
                  dialogTitle: "Share verse",
                }}
              />
            </div>
          </div>
          <p
            style={{ fontSize: settings.articleFontSize }}
            className={cn("pt-5 leading-9 font-medium", {
              "text-right": alignment === "right",
              "text-left": alignment === "left",
              "text-center": alignment === "center",
              "text-justify": alignment === "justify",
            })}
          >
            {readingItem.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LongerView;
