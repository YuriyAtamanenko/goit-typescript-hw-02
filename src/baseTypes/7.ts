/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(weekday: Weekday): boolean {
  return weekday === Weekday.Saturday || weekday === Weekday.Sunday;
}

isWeekend(Weekday.Monday);
isWeekend(Weekday.Tuesday);
isWeekend(Weekday.Wednesday);
isWeekend(Weekday.Thursday);
isWeekend(Weekday.Friday);
isWeekend(Weekday.Saturday);
isWeekend(Weekday.Sunday);
