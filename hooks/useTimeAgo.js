import { useEffect, useState } from 'react'
import { lang, isDateTimeFormatSupported, formatDate } from 'helpers'

const DATE_UNITS = [
  ['month', 604800 * 4],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
]

const getDateDiffs = timestamp => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

const useTimeAgo = timestamp => {
  const [timeago, setTimeAgo] = useState(() => getDateDiffs(timestamp))
  const { value, unit } = timeago

  useEffect(() => {
    if (isDateTimeFormatSupported) {
      const interval = setInterval(() => {
        const newTimeAgo = getDateDiffs(timestamp)
        setTimeAgo(newTimeAgo)
      }, 15000)

      return () => clearInterval(interval)
    }
  }, [timestamp])

  if (!isDateTimeFormatSupported) {
    return formatDate(timestamp)
  }

  const relativeTimeFormat = new Intl.RelativeTimeFormat(lang, {
    style: 'short',
  }).format(value, unit)

  return relativeTimeFormat
}

export default useTimeAgo
