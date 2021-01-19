import Header from './Header'
import Nav from './Nav'
import { ExternalContainer, Mobile } from './Globals'

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
