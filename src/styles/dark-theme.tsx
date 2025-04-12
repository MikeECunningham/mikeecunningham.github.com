import { createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    divider: '#794b00',
  },
});

// const darkTheme = createTheme({
//   palette: {
//     // palette values for dark mode
//     primary: { main: '#313131' },
//     divider: 'rgba(255, 255, 255, 0.12)',
//     background: {
//       default: '#121212',
//       paper: '#121212',
//     },
//     text: {
//       primary: '#fff',
//       secondary: 'rgba(255, 255, 255, 0.7)',
//     },
//   },
// });

export default darkTheme;