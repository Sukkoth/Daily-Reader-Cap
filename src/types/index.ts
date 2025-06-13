/**
 * @desc Reading item type for the lectionary
 * @param book - book of the reading
 * @param text - text of the reading
 */
export type ReadingItem = {
  book: string;
  text: string;
};

export type Holidays = {
  christian: string[];
  mekaneYesus: string[];
  others: string[];
};

export type FormattedHolidays = {
  christian: { date: Date; name: string }[];
  mekaneYesus: { date: Date; name: string }[];
  others: { date: Date; name: string }[];
};

// type Holiday = Pick<RawReading, "date" | "holidays">;

/**
 * @desc Reading type for the lectionary
 * @param date - date of the reading
 * - date is in format YYYY-MM-DD
 * @param holidays - holidays for the date
 * - not all the days have holidays
 * @param title - title for the date
 * - only for sunday but some sunday's don't have title
 * @param description - description for the date
 * - only for sunday but some sunday's don't have description
 * @param readings - readings for the date
 * - common for all dates but sundays and some weekdays have 3 readings while others have 1
 */
export type Reading = {
  date: string;
  title: string | null | undefined;
  description: string | null | undefined;
  holidays: Holidays | null | undefined;
  readings: [ReadingItem, ReadingItem, ReadingItem] | [ReadingItem];
};

export type RawReading = {
  date: string;
  title: string | null;
  description: string | null;
  holidays: string;
  readings: string;
};

export type TextAlign = "left" | "center" | "right" | "justify";
export type Language = "en" | "amh" | "om";

export type Settings = {
  // article types
  articleFontSize: number;
  articleLineHeight: number;
  articleAlign: TextAlign;

  // quote mode settings
  quoteFontSize: number;
  quoteLineHeight: number;
  quoteAlign: TextAlign;
  //language settings

  appLanguage: Language;
  contentLanguage: Language;
  //notificationSettings

  notificationSundayOnly: boolean;
  notificationTimes: {
    hour: number;
    minute: number;
  }[];
};

/**
 * @description StreakData is a type that represents the streak data for the user.
 * It contains the overall streak data and the weekly streak data.
 * The weekly streak data is an array of numbers that represent the days of the week that the user has read.
 * The numbers are the days of the week starting from 0 for Sunday.
 */
export type Streak = {
  overall: {
    lastViewed: string;
    bestStreak: number;
    currentStreak: number;
  };
  weekly: { startOfWeek: string; streak: number[] };
};
