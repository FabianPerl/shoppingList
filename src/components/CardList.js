import React from 'react';
import FoodCard from './FoodCard';

class CardList extends React.Component {
    render() {
      let githublist = this.props.data || [];

      return ( 
        <ul>
          {githublist.map(profile => <FoodCard {...profile} key={profile.name} />)}
        </ul>
      );
    }
}

export default CardList
