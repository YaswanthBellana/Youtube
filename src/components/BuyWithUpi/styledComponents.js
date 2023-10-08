import styled from 'styled-components'

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  width: 100vw;
  height: 10vh;
  @media screen and (min-width: 850px) {
    width: 70vw;
  }
`
export const TextContainer = styled.div`
  margin: 10px;
`
export const Head = styled.h1`
  font-size: 20px;
  font-weight: lighter;
  font-style: italic;
`
export const Logo = styled.img`
  height: 150px;
  width: 300px;
  @media screen and (max-width: 850px) {
    height: 100px;
    width: 200px;
  }
`
export const GetButton = styled.button`
  height: 40px;
  width: 120px;
  border: black;
  background-color: white;
  font-size: 30px;
`
export const ImageContainer = styled.div`
  align-self: flex-end;
`
export const BackgroundImage = styled.img`
  height: 200px;
  width: 300px;
`
