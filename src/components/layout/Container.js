import { Container as MuiContainer } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="lg" sx={{ mt: '6rem' }}>
            {children}
        </MuiContainer>
    )
}

export default Container