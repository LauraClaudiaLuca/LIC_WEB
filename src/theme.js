import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5"
    },
    secondary: {
      main: "#ff7c04"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#ffffff"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;