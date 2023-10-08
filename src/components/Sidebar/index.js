import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Sidebar = props => {
  const {isDarkMode} = props

  const setClassName = isDarkMode ? 'dark-mode' : 'white-mode'

  const dlBg = isDarkMode ? 'dark-mode-side' : 'white-mode-side'

  return (
    <>
      <Header />
      <div className={dlBg}>
        <div className="sidebar-container">
          <Link to="/videos/all">
            <h1 className={`sidebar-heads ${setClassName}`}>Home</h1>
          </Link>
          <Link to="/trending">
            <h1 className={`sidebar-heads ${setClassName}`}>Trending</h1>
          </Link>
          <Link to="/gaming">
            <h1 className={`sidebar-heads ${setClassName}`}>Gaming</h1>
          </Link>
          <Link to="/saved-videos">
            <h1 className={`sidebar-heads ${setClassName}`}>Saved Videos</h1>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Sidebar
