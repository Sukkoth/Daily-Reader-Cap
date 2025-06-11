import { useAtom } from "jotai";
import { settingsAtom } from "..";

export default function useAppSettings() {
  return useAtom(settingsAtom);
}
