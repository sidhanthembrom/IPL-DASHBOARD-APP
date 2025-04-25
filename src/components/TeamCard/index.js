// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props

  return (
    <li>
      <Link className="list-item-TeamCard" to={`/team-matches/${eachTeam.id}`}>
        <img
          className="card-img"
          src={eachTeam.teamImageUrl}
          alt={eachTeam.name}
        />
        <p className="heading-for-list-item">{eachTeam.name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
