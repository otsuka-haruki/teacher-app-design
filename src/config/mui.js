import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

const ThemeProvider = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: blue[700]
            }
        },
        typography: {
            fontFamily: '"Zen Kaku Gothic New", sans-serif;'
        }
    });

    return (
        <MuiThemeProvider theme={theme}>
            {props.children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider;

