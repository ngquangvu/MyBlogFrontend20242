export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg'];

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const getFileNameAndExtension = (url: string | undefined): string | null => {
  const match = url ? url.match(/\/([^\/?#]+)\.([a-z0-9]+)(?:[?#]|$)/i) : '';
  if (match && match.length === 3) {
    const fileName = match[1];
    const extension = match[2];
    return fileName + '.' + extension;
  }
  return null; // return null if no match found
};

export const clamp = (number: number, a: number, b: number) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
};

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'GMT',
  });
}

// Get year and month amount between two dates (2 or 2.5 or 2.3)
export function getYearMonthAmountBetweenDates(date1: Date, date2: Date) {
  const years = date2.getFullYear() - date1.getFullYear();
  const months = date2.getMonth() - date1.getMonth();
  return years + Math.round((months / 12) * 10) / 10;
}

// Append url param to the current url, if empty, remove the param
export function appendUrlParam(key: string, value: string) {
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    url.search = searchParams.toString();
    return url.toString();
  }
  return '';
}
