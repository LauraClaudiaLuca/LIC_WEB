import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';
import Appl from './Appl';
import { indigo } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';
import theme from './theme'

export const App =()=> {

    // const theme = createMuiTheme({
    //     palette: {
    //         type:"light",
    //       primary: indigo,
    //     },
    //   });

  return (
    <MuiThemeProvider theme={theme}>
       <CssBaseline/>
      <Appl />
    </MuiThemeProvider>
  );
}