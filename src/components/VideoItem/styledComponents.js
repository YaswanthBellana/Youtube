import styled from 'styled-components'

export const Published = styled.p`
  font-size: 15px;
  font-weight: lighter;
  color: #475769;
`
export const VideoCount = styled.p`
  font-size: 15px;
  font-weight: lighter;
  color: #475769;
`
export const PAndCContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const ChannelName = styled.p`
  font-size: 25px;
  font-style: italic;
  font-weight: 700;
`
export const ListImage = styled.img`
  height: 80%;
  width: 100%;
`
export const ListItem = styled.li`
  height: 300px;
  width: 350px;
  margin: 25px;
  @media screen and (max-width: 875px) {
    height: 200px;
    width: 250px;
    margin: 15px;
  }
`
export const VideoName = styled.h1`
  font-size: 30px;
  font-weight: 800;
`
