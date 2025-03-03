// Write your code here
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedList = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    // console.log(updatedList)

    this.setState({isLoading: false, teamsList: updatedList})
  }

  render() {
    const {isLoading, teamsList} = this.state

    return (
      <Link to="/">
        <div className="app-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="bg-container">
              <div className="heading-container">
                <img
                  width="50px"
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                />
                <h1>IPL Dashboard</h1>
              </div>
              <ul className="list-container-for-Home">
                {teamsList.map(eachTeam => (
                  <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
