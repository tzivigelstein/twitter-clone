import Header from 'components/Header'
import Nav from 'components/Nav'

const Layout = ({ children, layoutConfig }) => {
  return (
    <>
      <Header layoutConfig={layoutConfig} />
      {children}
      <Nav layoutConfig={layoutConfig} />
    </>
  )
}

export default Layout
