import { CardActions } from "@mui/material"

const CardActionsFlexRight = (props) => {
    return (
        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
            {props.children}
        </CardActions>
    );
}

export default CardActionsFlexRight