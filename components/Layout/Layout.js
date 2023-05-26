import Header from 'components/Header'
import Nav from 'components/Nav'
import styles from './index.module.css'
import Sidebar from 'components/Sidebar'

const Layout = ({ children, layoutConfig }) => {
  return (
    <div className={styles.container}>
      <Header layoutConfig={layoutConfig} />
      <Sidebar />
      {children}
      <Nav layoutConfig={layoutConfig} />
    </div>
  )
}

export default Layout
