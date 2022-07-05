export default function formatDate(dateStr: string): string {
  const options: Intl.DateTimeFormatOptions = {
    // year: "numeric",
    month: "numeric",
    day: "2-digit",
    weekday:"short"
  };
  const rawDate = new Date(Date.parse(dateStr)).toLocaleDateString(
    "en-EN",
    options
  );
  return rawDate;
}