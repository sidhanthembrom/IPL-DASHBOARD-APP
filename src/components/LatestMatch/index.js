// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const updatedData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  return (
    <div className="latest-match-container">
      <div className="left-container">
        <p>{updatedData.competingTeam}</p>
        <p>{updatedData.date}</p>
        <p>{updatedData.venue}</p>
        <p>{updatedData.result}</p>
      </div>
      <img
        width="200px"
        height="200px"
        src={updatedData.competingTeamLogo}
        alt={`latest match ${updatedData.competingTeam}`}
      />
      <div className="right-container">
        <p className="bold">First Innings</p>
        <p>{updatedData.firstInnings}</p>
        <p className="bold">Second Innings</p>
        <p>{updatedData.secondInnings}</p>
        <p className="bold">Man Of The Match</p>
        <p>{updatedData.manOfTheMatch}</p>
        <p className="bold">Umpires</p>
        <p>{updatedData.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
