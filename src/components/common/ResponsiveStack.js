import { Stack } from "@mui/material"

const ResponsiveStack = (props) => {
    const { children } = props;

    return (
        <Stack direction={props.direction || 'row'} spacing={props.spacing || 0} sx={{ flexWrap: 'wrap', '& .MuiChip-root': { m: { xs: '0 0.5rem 0.5rem 0', md: '0 1rem 0.5rem 0' } } }}>
            {children}
        </Stack>
    )
}

export default ResponsiveStack