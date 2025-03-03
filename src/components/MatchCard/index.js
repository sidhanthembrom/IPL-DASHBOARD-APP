// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props

  return (
    <li className="list-item">
      <img
        width="100px"
        height="140px"
        src={eachMatch.competing_team_logo}
        alt={`competing team ${eachMatch.competing_team}`}
      />
      <p>{eachMatch.competing_team}</p>
      <p>{eachMatch.result}</p>
      <p
        className={eachMatch.match_status === 'Won' ? 'green-text' : 'red-text'}
      >
        {eachMatch.match_status}
      </p>
    </li>
  )
}

export default MatchCard
