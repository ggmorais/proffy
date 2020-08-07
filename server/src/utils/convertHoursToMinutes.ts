export function convertHoursToMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  const timeAndMinutes = (hours * 60) + minutes;

  return timeAndMinutes;
}