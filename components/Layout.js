import Header from 'components/Header'
import Nav from 'components/Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  )
}

export default Layout
