import type { Holidays, RawReading, Reading } from "../types";
import { readingsData } from "../data/data";
import { isSunday } from "date-fns";

export function parseReadingData(reading: RawReading): Reading {
  return {
    date: reading.date,
    title: reading.title,
    description: reading.description,
    readings: JSON.parse(reading.readings),
    holidays: JSON.parse(reading.holidays) as Holidays,
  };
}

export function getReadingData(date: string): Reading | null {
  const data = readingsData.find((item) => item.date === date);
  if (!data) return null;
  return parseReadingData(data);
}

/**
 * Get the top sub title for the reading
 * - If the date is a Sunday and there is a description, return the description
 * - If the date is a Sunday and there is no description, return the first christian holiday
 * - If the date is a Sunday and there is no description and no christian holiday, return null
 * - Title will be displayed on ArticleView (if there is any)
 */
export function getTopSubTitle(reading: Reading | null): null | string {
  if (!reading) return null;
  if (isSunday(new Date(reading.date)) && reading?.description) {
    return reading.description;
  } else if (reading.holidays?.christian.length) {
    return reading.holidays.christian[0];
  } else if (reading.holidays?.mekaneYesus.length) {
    return reading.holidays.mekaneYesus[0];
  } else {
    return null;
  }
}
