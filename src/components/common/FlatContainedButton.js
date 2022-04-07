import { Button } from "@mui/material"

const FlatContainedButton = props => {
    return <Button variant="contained" fullWidth={props.fullWidth} sx={{ boxShadow: 'none' }}>{props.children}</Button>
}

export default FlatContainedButton