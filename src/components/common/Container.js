import { Container as MuiContainer } from "@mui/material"
const Container = (props) => {
    return (
        <MuiContainer maxWidth="lg">
            {props.children}
        </MuiContainer>
    )
}

export default Container