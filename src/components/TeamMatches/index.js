// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamCardDetails: {}}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({isLoading: false, teamCardDetails: updatedData})
  }

  render() {
    const {isLoading, teamCardDetails} = this.state

    return (
      <div className="teamMatches-bg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="teamMatches-container">
            <img
              width="100%"
              src={teamCardDetails.teamBannerUrl}
              alt="team banner"
            />
            <p className="latestMatches">Latest Matches</p>
            <LatestMatch
              latestMatchDetails={teamCardDetails.latestMatchDetails}
            />
            <ul className="list-container-for-MatchCard">
              {teamCardDetails.recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
