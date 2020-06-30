import React from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/DeleteOutlineRounded';
import Edit from '@material-ui/icons/EditOutlined';

class FoodCard extends React.Component {
  render() {
    let data = this.props;

    return (
      <li className="Card"> 
        <span className="Card-Text">{ data.name }</span><Button size="small"><Edit variant="outlined"/></Button><Button size="small"><Delete variant="outlined"/></Button>
      </li>
    )
  }
}

export default FoodCard