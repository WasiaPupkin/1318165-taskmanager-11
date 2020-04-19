const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const WeekDays = {
  MONDAY: `mo`,
  TUESDAY: `tu`,
  WEDNESDAY: `we`,
  THURSDAY: `th`,
  FRIDAY: `fr`,
  SATURDAY: `sa`,
  SUNDAY: `su`
}
Object.freeze(WeekDays);
const DAYS = [WeekDays.MONDAY, WeekDays.THURSDAY, WeekDays.WEDNESDAY, WeekDays.THURSDAY, WeekDays.FRIDAY, WeekDays.SATURDAY, WeekDays.SUNDAY];

const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export {COLORS, WeekDays, DAYS, MONTH_NAMES}
