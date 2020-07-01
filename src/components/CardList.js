import React from 'react';
import FoodCard from './FoodCard';

class CardList extends React.Component {
    render() {
      console.log(this.props)
      let githublist = this.props.data || [];

      return ( 
        <ul>
          {githublist.map(profile => <FoodCard {...profile} key={profile.id} delete={this.props.delete} edit={this.props.edit} />)}
        </ul>
      );
    }
}

export default CardList
