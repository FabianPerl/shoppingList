import React from 'react';
import GithubCard from './GithubCard';

class CardList extends React.Component {
    render() {
      let githublist = this.props.data || [];

      return ( 
        <div>
          {githublist.map(profile => <GithubCard {...profile} key={profile.name} />)}
        </div>
      );
    }
}

export default CardList
