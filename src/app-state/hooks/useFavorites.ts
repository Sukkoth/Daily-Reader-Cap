import { useAtom } from "jotai";
import { favoritesAtom } from "..";

export default function useFavorites() {
  return useAtom(favoritesAtom);
}
