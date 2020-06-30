import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { fade, makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import Add from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';


const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: orange,
  },
});

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    }
  }
}));

function App () {

  let list = [];
  const classes = useStyles();
  let inputNameRef = React.createRef();
  let deleteValue = () => { };
  let addValue = () => {
    let addName = inputNameRef.current.value;
    if (!addName || addName.length === 0) return;
    list = [ ...list, { profile: null, name: addName}];
    inputNameRef.current.value = '';
  };

  return ( 
    <div className = "App">
    <ThemeProvider theme={theme}>
      <header className = "App-header">
        <h1>Shopping List</h1>
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Add/>
        </div>
        <InputBase
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            addValue();
            ev.preventDefault();
          }
        }}
          placeholder="Add…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          inputRef={inputNameRef}
        />
      </div>
      </header> 
      </ThemeProvider>
    </div>
  );
}

export default App;

