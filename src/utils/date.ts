import { getDaysInMonth } from "date-fns";

export function getFormattedIndexDaysInMonth(
  selectedDate: Date,
): (number | null)[] {
  const daysInMonth = getDaysInMonth(selectedDate);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const startDay = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const padding: (number | null)[] = Array.from(
    { length: startDay },
    () => null,
  );

  return padding.concat(days);
}
