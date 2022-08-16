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

export const getTweetData = (tweet, user) => {
  return {
    liked: tweet.likes.includes(user.uid),
    id: tweet.id,
    displayName: tweet.displayName,
    image: tweet.image ? tweet.image : '',
    username: tweet.username,
    picture: tweet.avatar,
    content: tweet.content,
    comments: tweet.comments,
    likes: tweet.likes,
    retweets: tweet.retweets,
    date: tweet.createdAt.seconds * 1000,
  }
}
