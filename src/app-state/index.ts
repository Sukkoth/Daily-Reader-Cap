import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { format, startOfWeek } from "date-fns";
import { capacitorStorage } from "../lib/capacitor-storage";
import type { Reading, Settings, Streak } from "../types";

const settingsStorage = createJSONStorage<Settings>(() => capacitorStorage);

const defaultSettings: Settings = {
  // article settings
  articleFontSize: 18,
  articleLineHeight: 24,
  articleAlign: "left",
  // quote settings
  quoteFontSize: 30,
  quoteLineHeight: 40,
  quoteAlign: "center",
  // language  settings
  appLanguage: "en",
  contentLanguage: "en",
  // notification settings
  notificationSundayOnly: false,
  notificationTimes: [{ hour: 8, minute: 30 }],
};

export const settingsAtom = atomWithStorage<Settings>(
  "settings",
  defaultSettings,
  settingsStorage,
);

const streakStorage = createJSONStorage<Streak>(() => capacitorStorage);

const defaultStreakData: Streak = {
  overall: {
    bestStreak: 1,
    currentStreak: 1,
    lastViewed: format(new Date(), "yyyy-MM-dd"),
  },
  weekly: {
    startOfWeek: format(startOfWeek(new Date()), "yyyy-MM-dd"),
    streak: [new Date().getDay()],
  },
};

export const streakAtom = atomWithStorage<Streak>(
  "streak",
  defaultStreakData,
  streakStorage,
);

const favoritesStorage = createJSONStorage<Reading[]>(() => capacitorStorage);
const defaultFavorites: Reading[] = [];

export const favoritesAtom = atomWithStorage<Reading[]>(
  "favorites",
  defaultFavorites,
  favoritesStorage,
);
