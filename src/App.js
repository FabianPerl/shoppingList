import React from 'react';
import CardList from './components/CardList'
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

class App extends React.Component {
  state = { list : [] }
  inputNameRef = React.createRef()

  clickButton = () => {
    let addName = this.inputNameRef.current.value
    this.setState(prevState => ( {
      list: [ ...prevState.list, { profile: null, name: addName}]
    }))

    // this.inputNameRef.ref.current.value = ''
  }

  render () {
    return ( 
      <div className = "App">
        <header className = "App-header">
          <h1>Food</h1>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <TextField fullWidth type="text" required inputRef={this.inputNameRef} id="outlined-basic" placeholder="Add Food" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" onClick={ () => this.clickButton() }>Add</Button>
            </Grid>
          </Grid>
          <CardList data={ this.state.list }> </CardList> 
        </header> 
      </div>
    );
  }
}

export default App;