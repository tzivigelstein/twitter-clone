import { useEffect, useState } from 'react'

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

const useTime = timestamp => {
  const [timeago, setTimeAgo] = useState(() => getDateDiffs(timestamp))
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp)
      setTimeAgo(newTimeAgo)
    }, 15000)

    return () => clearInterval(interval)
  }, [timestamp])
  const relativeTimeFormat = new Intl.RelativeTimeFormat(navigator.language, { style: 'short' })
  const { value, unit } = timeago
  return relativeTimeFormat.format(value, unit)
}

export default useTime
