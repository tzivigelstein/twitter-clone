import Header from 'components/Header'
import Nav from 'components/Nav'

const Layout = ({ children, layoutConfig }) => {
  const { title } = layoutConfig
  return (
    <>
      <Header title={title} />
      {children}
      <Nav layoutConfig={layoutConfig} />
    </>
  )
}

export default Layout
