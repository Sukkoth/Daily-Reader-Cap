// lib/capacitorStorage.ts
import { Preferences } from "@capacitor/preferences";

export const capacitorStorage = {
  getItem: async (key: string) => {
    const result = await Preferences.get({ key });
    return result.value ?? null;
  },
  setItem: async (key: string, value: string) => {
    await Preferences.set({ key, value });
  },
  removeItem: async (key: string) => {
    await Preferences.remove({ key });
  },
};
