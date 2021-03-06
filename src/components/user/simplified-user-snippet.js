import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from './user-avatar';
import UserRank from './user-rank';

const SimplifiedUserSnippet = ({user}) =>{
  const {avatar, username, rank} = user;

  return (
      <div className="component simplifiedUser">
        <div className="simplifiedUser__avatar">
          <UserAvatar avatar={avatar} username={username}/>
        </div>
        <div className="simplifiedUser__details">
          <div className="simplifiedUser__details--username">{username}</div>
          <div className="simplifiedUser__details--rank">
            <UserRank rank={rank} />
          </div>
        </div>
      </div>
  )
};

export default SimplifiedUserSnippet;

SimplifiedUserSnippet.propTypes = {
  user: PropTypes.shape({
    rank: PropTypes.number,
    role: PropTypes.number,
    username: PropTypes.string,
    avatar: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ])
  }).isRequired
};
