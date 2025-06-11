import type { Reading } from "../types";

/**
 * Parse a reading for a favorite.
 * @param reading The reading to parse.
 * @returns A reading with only the date and readings.
 */
export function parseReadingForFavorite(reading: Reading): Reading {
  return {
    date: reading.date,
    readings: reading.readings,
  } as Reading;
}

/**
 * Remove a favorite from the list of favorites.
 * @param favorites The list of favorites.
 * @param favorite The favorite to remove.
 * @returns The list of favorites with the favorite removed.
 */
export function removeFavorite(favorites: Reading[], favorite: Reading) {
  return favorites.filter((fav) => fav.date !== favorite.date);
}

/**
 * Add a favorite to the list of favorites.
 * @param favorites The list of favorites.
 * @param favorite The favorite to add.
 * @returns The list of favorites with the favorite added.
 */
export function addFavorite(favorites: Reading[], favorite: Reading) {
  return [...favorites, parseReadingForFavorite(favorite)];
}

/**
 * Check if a reading is a favorite.
 * @param favorites The list of favorites.
 * @param favorite The favorite to check.
 * @returns True if the reading is a favorite, false otherwise.
 */
export function isFavorite(favorites: Reading[], favorite: Reading) {
  return favorites.find((fav) => fav.date === favorite.date);
}

/**
 * Toggle a favorite in the list of favorites.
 * @param favorites The list of favorites.
 * @param favorite The favorite to toggle.
 * @returns The list of favorites with the favorite toggled.
 */
export function toggleFavorite(favorites: Reading[], favorite: Reading) {
  return isFavorite(favorites, favorite)
    ? removeFavorite(favorites, favorite)
    : addFavorite(favorites, favorite);
}
