import Header from 'components/Header'
import Nav from 'components/Nav'
import { ExternalContainer, Mobile } from 'components/Globals'

const Layout = ({ children }) => {
  return (
    <ExternalContainer>
      <Mobile>
        <Header />
        {children}
        <Nav />
      </Mobile>
    </ExternalContainer>
  )
}

export default Layout
