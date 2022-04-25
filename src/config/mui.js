import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

const ThemeProvider = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: blue[500],
            }
        },
        typography: {
            fontFamily: '"Roboto", "Zen Kaku Gothic New", sans-serif;'
        }
    });

    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider;

