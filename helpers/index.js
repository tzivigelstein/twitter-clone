export const lang = typeof navigator === 'undefined' ? 'es-ES' : navigator.language
export const isDateTimeFormatSupported = typeof Intl !== 'undefined' && Intl.DateTimeFormat

export const formatDate = timestamp => {
  const date = new Date(timestamp)

  if (!isDateTimeFormatSupported) {
    const OPTIONS = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    return date.toLocaleDateString(lang, OPTIONS)
  }

  const OPTIONS = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  return new Intl.DateTimeFormat(lang, OPTIONS).format(date)
}
