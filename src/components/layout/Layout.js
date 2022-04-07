import { Box } from '@mui/material';
import Container from "./Container";
import AppBar from './AppBar';

const Layout = ({ children }) => {
    return (
        <Box>
            <AppBar />
            <Container>
                {children}
            </Container>
        </Box>

    )
}

export default Layout