// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamCardDetails: {}, won: 0, lost: 0, draw: 0}

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

    this.setState(
      {isLoading: false, teamCardDetails: updatedData},
      this.matchDataForPie,
    )
  }

  handleBackEvent = e => {
    const {history} = this.props
    history.push('/')
  }

  matchDataForPie = () => {
    const {teamCardDetails} = this.state
    // console.log(teamCardDetails.recentMatches)

    let won = 0
    let lost = 0
    // let draw = 0

    teamCardDetails.recentMatches.forEach(obj => {
      if (obj.match_status === 'Won') {
        won += 1
      } else {
        lost += 1
      }
    })
    this.setState({won, lost})
  }

  render() {
    const {isLoading, teamCardDetails, won, lost} = this.state
    // console.log(won, lost)

    const dataForPie = [
      {name: 'Wins', value: won, color: '#4CAF50', id: 1},
      {name: 'Losses', value: lost, color: '#F44336', id: 2},
    ]

    return (
      <div className="teamMatches-bg">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="teamMatches-container">
            <button onClick={this.handleBackEvent}>Back</button>
            <img
              width="100%"
              src={teamCardDetails.teamBannerUrl}
              alt="team banner"
            />
            <p className="latestMatches">Latest Matches</p>
            <LatestMatch
              latestMatchDetails={teamCardDetails.latestMatchDetails}
            />
            <PieChart width={400} height={400}>
              <Pie
                data={dataForPie}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {dataForPie.map(entry => (
                  <Cell key={entry.id} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
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
