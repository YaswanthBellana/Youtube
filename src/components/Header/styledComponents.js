import styled from 'styled-components'

export const ImageContainer = styled.div``

export const WebsiteLogo = styled.img`
  height: 60px;
  width: 120px;
  @media screen and (max-width: 875px) {
    height: 40px;
    width: 100px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 50px;
  margin-right: 50px;
  @media screen and (max-width: 875px) {
    height: 20px;
    width: 20px;
    margin-left: 25px;
    margin-right: 25px;
  }
`
