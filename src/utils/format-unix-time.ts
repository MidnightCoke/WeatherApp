import i18n from "./i18n";

export function formatUnixTimeWithTimezone(
  unixSeconds: number,
  timezoneOffsetInSeconds: number,
  type: "time" | "date" = "time"
): string {
  if (!unixSeconds) return "No data";

  const utcDate = new Date(unixSeconds * 1000);
  const date = new Date(utcDate.getTime() + timezoneOffsetInSeconds * 1000);

  return type === "time"
    ? date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
      })
    : date.toLocaleDateString(i18n.locale, {
        weekday: "long", // Monday
        day: "2-digit", // 26
        month: "long", // May
        timeZone: "UTC",
      });
}
