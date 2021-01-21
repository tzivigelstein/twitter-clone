import Link from 'next/link'
import styled from '@emotion/styled'

export const NewIcon = props => {
  const Button = styled.div`
    position: absolute;
    bottom: 73px;
    right: 20px;
    background-color: #1da0f2;
    width: 59px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    cursor: pointer;
  `
  return (
    <Link href="/compose/tweet">
      <Button>
        <svg viewBox="0 0 22.5 22.5" width={22.5} height={22.5} stroke="#fff" fill="none" {...props}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Button>
    </Link>
  )
}

export const CommentIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={17.5} height={17.5} stroke="#8899a6" fill="none" {...props}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  )
}

export const RetweetIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={17.5} height={17.5} stroke="#8899a6" fill="none" {...props}>
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  )
}

export const LikeIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={17.5} height={17.5} stroke="#8899a6" fill="none" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

export const ShareIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={17.5} height={17.5} stroke="#8899a6" fill="none" {...props}>
      <circle cx={18} cy={5} r={3} />
      <circle cx={6} cy={12} r={3} />
      <circle cx={18} cy={19} r={3} />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  )
}

export const HomeIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={24} height={24} stroke="#8899a6" fill="none" {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  )
}

export const SearchIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={24} height={24} stroke="#8899a6" fill="none" {...props}>
      <circle cx={11} cy={11} r={8} />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

export const BellIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={24} height={24} stroke="#8899a6" fill="none" {...props}>
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  )
}

export const MailIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={24} height={24} stroke="#8899a6" fill="none" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  )
}

export const StarIcon = props => {
  return (
    <svg viewBox="0 0 24.5 24.5" width={24} height={24} stroke="#1da0f2" fill="none" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export const ArrowLeftIcon = props => {
  return (
    <svg viewBox="0 0 24 24" width={22.5} height={22.5} stroke="#1da0f2" fill="none" {...props}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}

export const Times = props => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__css-i6dzq1"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
