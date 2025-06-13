import { Trash } from "lucide-react";
import type { Reading } from "../types";
import IconButton from "./icon-button";
import { useNavigate } from "react-router-dom";

type Props = {
  favorites: Reading[];
  handleRemoveFavorite: (favorite: Reading) => void;
};
export default function FavoritesList({
  favorites,
  handleRemoveFavorite,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      {favorites.map((item: Reading) => (
        <div
          onClick={() =>
            navigate(`/readings/${item.date}#${item.readings[0].book}`)
          }
          key={item.date}
          className="dark:bg-shade-2 bg-light-2 border-border-light dark:border-border-shade flex items-center justify-between rounded-xl border p-4"
        >
          <div className="max-w-4/5 md:max-w-[90%]">
            <h1 className="text-[22px] font-medium">{item.readings[0].book}</h1>
            <p className="line-clamp-2 pt-2 text-sm text-gray-600 md:line-clamp-3 dark:text-gray-300">
              {item.readings[0].text}
            </p>
          </div>
          <IconButton
            icon={<Trash className="text-red-400" />}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              handleRemoveFavorite(item);
            }}
          />
        </div>
      ))}
    </div>
  );
}
