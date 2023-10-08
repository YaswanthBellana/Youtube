import {
  TotalContainer,
  TextContainer,
  Logo,
  Head,
  GetButton,
  ImageContainer,
  BackgroundImage,
} from './styledComponents'

const BuyWithUPI = () => (
  <>
    <TotalContainer>
      <TextContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <Head>Buy Nxt Watch Premium prepaid plans with UPI</Head>
        <GetButton>GET IT NOW</GetButton>
      </TextContainer>
      <ImageContainer>
        <BackgroundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png "
          alt="Banner Background image"
        />
      </ImageContainer>
    </TotalContainer>
  </>
)
export default BuyWithUPI
