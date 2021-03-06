import React from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/DeleteOutlineRounded';

class FoodCard extends React.Component {
  render() {
    let data = this.props;

    return (
      <li className="Card-Item"> 
        <span className="Card-Text">{ data.name }</span><Button size="small" onClick={function() { data.delete(data.id)} }><Delete variant="outlined"/></Button>
      </li>
    )
  }
}

export default FoodCard