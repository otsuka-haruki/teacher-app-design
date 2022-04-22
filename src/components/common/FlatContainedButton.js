import { Button } from "@mui/material"

const FlatContainedButton = props => {
    return <Button
        variant="contained"
        fullWidth={props.fullWidth}
        size={props.size}
        sx={{ boxShadow: 'none' }}>
        {props.children}
    </Button>
}

export default FlatContainedButton