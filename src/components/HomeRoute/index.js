import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'
import BuyWithUPI from '../BuyWithUpi'
import VideoItem from '../VideoItem'

import {
  FailureViewContainer,
  FailureImage,
  Detail,
  Para,
  RetryButt,
  AllVideos,
  UnorderedList,
  NoVideosView,
  NoVideosImage,
  SearchbarContainer,
  AllVideosSectionContainer,
  SearchInput,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  enterSearchInput = () => {
    this.getVideos()
  }

  changeSearchInput = searchInput => {
    this.setState({searchInput})
  }

  renderFailureView = () => (
    <>
      <FailureViewContainer>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
        <Detail>Oops! Something Went Wrong</Detail>
        <Para>
          We are having some trouble to complete your request.
          <br /> Please try again.
        </Para>
        <RetryButt>Retry</RetryButt>
      </FailureViewContainer>
    </>
  )

  renderVideosList = () => {
    const {videosList} = this.state
    const showVideos = videosList.length > 0

    return showVideos ? (
      <AllVideos>
        <UnorderedList>
          {videosList.map(video => (
            <VideoItem videoData={video} key={video.id} />
          ))}
        </UnorderedList>
      </AllVideos>
    ) : (
      <NoVideosView>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <Para>Try different keywords or remove search filters.</Para>
        <RetryButt>Retry</RetryButt>
      </NoVideosView>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <Sidebar />
        <BuyWithUPI />
        <AllVideosSectionContainer>
          <SearchbarContainer>
            <SearchInput
              value={searchInput}
              enterSearchInput={this.enterSearchInput}
              changeSearchInput={this.changeSearchInput}
            />
            <AiOutlineSearch />
          </SearchbarContainer>
          {this.renderAllVideos()}
        </AllVideosSectionContainer>
      </>
    )
  }
}

export default Home
