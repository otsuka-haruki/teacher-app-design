import { Container as MuiContainer } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="lg" sx={{ mt: { xs: '5rem', md: '6rem' } }}>
            {children}
        </MuiContainer>
    )
}

export default Container