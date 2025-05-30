export function getLocalTimeFromOffset(timezoneOffsetSeconds: number): string {
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const localTime = new Date(utcTime + timezoneOffsetSeconds * 1000);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(localTime);
}
