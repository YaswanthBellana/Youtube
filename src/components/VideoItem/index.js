import {Link} from 'react-router-dom'

import {
  Published,
  VideoCount,
  PAndCContainer,
  ChannelName,
  VideoName,
  ListImage,
  ListItem,
} from './styledComponents'

const VideoItem = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData

  return (
    <Link to={`/videos/${id}`}>
      <ListItem>
        <ListImage src={thumbnailUrl} alt={`thumbnail ${id}`} />
        <VideoName>{title}</VideoName>
        <ChannelName>{channel}</ChannelName>
        <PAndCContainer>
          <VideoCount>{viewCount}</VideoCount>
          <Published>{publishedAt}</Published>
        </PAndCContainer>
      </ListItem>
    </Link>
  )
}

export default VideoItem
