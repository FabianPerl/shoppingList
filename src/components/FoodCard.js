import React from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/DeleteOutlineRounded';
import Edit from '@material-ui/icons/EditOutlined';

class FoodCard extends React.Component {
  render() {
    let data = this.props;
    console.log(data);

    return (
      <li className="Card-Item"> 
        <span className="Card-Text">{ data.name }</span><Button size="small" onClick={function () { data.edit(data.id) }}><Edit variant="outlined"/></Button><Button size="small" onClick={function() { data.delete(data.id)} }><Delete variant="outlined"/></Button>
      </li>
    )
  }
}

export default FoodCard