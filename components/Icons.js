import Link from 'next/link'
import styled from '@emotion/styled'

export const NewIcon = () => {
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
        <svg
          viewBox="0 0 22.5 22.5"
          width="22.5"
          height="22.5"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </Button>
    </Link>
  )
}

export const CommentIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="17.5"
      height="17.5"
      stroke="#8899a6"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  )
}

export const RetweetIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="17.5"
      height="17.5"
      stroke="#8899a6"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="17 1 21 5 17 9"></polyline>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
      <polyline points="7 23 3 19 7 15"></polyline>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
    </svg>
  )
}

export const LikeIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="17.5"
      height="17.5"
      stroke="#8899a6"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  )
}

export const ShareIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="17.5"
      height="17.5"
      stroke="#8899a6"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  )
}

export const HomeIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="24"
      height="24"
      stroke="#8899a6"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  )
}

export const SearchIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="24"
      height="24"
      stroke="#8899a6"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  )
}

export const BellIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="24"
      height="24"
      stroke="#8899a6"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  )
}

export const MailIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="24"
      height="24"
      stroke="#8899a6"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  )
}

export const StarIcon = () => {
  return (
    <svg
      viewBox="0 0 24.5 24.5"
      width="24"
      height="24"
      stroke="#1da0f2"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  )
}

export const ArrowLeftIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22.5"
      height="22.5"
      stroke="#1da0f2"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  )
}
