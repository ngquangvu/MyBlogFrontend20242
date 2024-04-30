export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg']

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const getFileNameAndExtension = (url: string | undefined): string | null => {
  const match = url ? url.match(/\/([^\/?#]+)\.([a-z0-9]+)(?:[?#]|$)/i) : ''
  if (match && match.length === 3) {
      const fileName = match[1]
      const extension = match[2]
      return fileName + '.' + extension
  }
  return null // return null if no match found
}

export const clamp = (number: number, a: number, b: number) => {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'GMT',
  })
}
