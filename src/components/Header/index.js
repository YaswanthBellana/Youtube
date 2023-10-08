import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FiSun} from 'react-icons/fi'
import {BsMoon} from 'react-icons/bs'

import './index.css'
import {
  ImageContainer,
  WebsiteLogo,
  ButtonsContainer,
  ProfileImage,
} from './styledComponents'

class Header extends Component {
  state = {isDarkMode: false}

  onClickLDButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {isDarkMode} = this.state
    const setButtonClassName = isDarkMode ? 'to-be-white' : 'to-be-blue'
    const setContainerClassName = isDarkMode
      ? `header-container`
      : `header-container-white`

    return (
      <>
        <div className={setContainerClassName}>
          <ImageContainer>
            {isDarkMode ? (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
                className="web-logo"
              />
            ) : (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
                className="web-logo"
              />
            )}
          </ImageContainer>
          <ButtonsContainer>
            {isDarkMode ? (
              <FiSun className="dl-sun-icon" onClick={this.onClickLDButton} />
            ) : (
              <BsMoon className="dl-moon-icon" onClick={this.onClickLDButton} />
            )}
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile-image"
            />
            <button
              type="button"
              className={setButtonClassName}
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </ButtonsContainer>
        </div>
      </>
    )
  }
}

export default withRouter(Header)
