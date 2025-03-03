// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props

  return (
    <Link to={`/team-matches/${eachTeam.id}`}>
      <li className="list-item-TeamCard">
        <img width="100px" src={eachTeam.teamImageUrl} alt={eachTeam.name} />
        <p className="heading-for-list-item">{eachTeam.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
