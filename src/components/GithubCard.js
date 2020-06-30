import React from 'react';

class GithubCard extends React.Component {
  render() {
    let data = this.props;

    return (
      <div> 
        { data.name } 
      </div>
    )
  }
}

export default GithubCard