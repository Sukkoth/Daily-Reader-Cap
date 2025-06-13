import { Share2, Star } from "lucide-react";
import type { Reading, ReadingItem } from "../../types";
import IconButton from "../icon-button";
import useFavorites from "../../app-state/hooks/useFavorites";
import { toggleFavorite } from "../../utils/favorites-utils";
import { useScrollToHash } from "../../hooks/useScrollToHash";

type Props = {
  reading: Reading;
};

function LongerView({ reading }: Props) {
  const [favorites, setFavorites] = useFavorites();

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
                  icon={<Star />}
                  onClick={() => handleAddFavorite(readingItem)}
                />
              )}
              <IconButton icon={<Share2 className="text-gray-400" />} />
            </div>
          </div>
          <p className="pt-5 text-justify text-lg leading-9 font-medium">
            {readingItem.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LongerView;
