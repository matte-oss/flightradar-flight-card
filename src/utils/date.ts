export function formatRelativeTime(date1: Date, date2: Date, language?: string): string {
  const formatter = new Intl.RelativeTimeFormat(language, { style: 'short' });

  const diff = Math.abs(date1.getTime() - date2.getTime());

  return formatter.format(Math.round(diff / 1000), 'seconds');
}
