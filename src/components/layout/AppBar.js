import { Link } from 'react-router-dom';
import { AppBar as MuiAppBar, Button, Typography, Toolbar } from '@mui/material';

const AppBar = () => {
    return (
        <MuiAppBar>
            <Toolbar>
                <Button color='inherit'><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
                <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>Teach Match</Typography>
                <Button color='inherit' variant='outlined'>Login</Button>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar