import { lang, formatDate } from 'helpers'

const useDateFormat = timestamp => {
  return formatDate(timestamp, lang)
}

export default useDateFormat
