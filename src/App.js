import React, { useState } from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: orange,
  },
});

function App () {
  const [ list, setList ] = useState([]);
  const [ uniqueID, setUniqueID ] = useState(0);

  let inputNameRef = React.createRef();
  let deleteValue = (id) => { 
    setList(list.filter(el => el.id !== id)) 
  };
  let editValue = (id) => { console.log(id); };
  let addValue = () => {
    let addName = inputNameRef.current.value;
    if (!addName || addName.length === 0) return;
    setList([ ...list, { profile: null, name: addName, id: uniqueID }]);
    setUniqueID(uniqueID + 1);
    inputNameRef.current.value = '';
  };

  return ( 
    <div className = "App">
      <ThemeProvider theme={theme}>
        <header className = "App-header">
          <h1 className="Header">Shopping List</h1>
          <SearchBar inputNameRef={inputNameRef} addValue={addValue}/>
          <CardList delete={deleteValue} edit={editValue} data={list}></CardList>
        </header> 
      </ThemeProvider>
    </div>
  );
}

export default App;

