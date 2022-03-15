import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const Home = () => {
    const navigate = useNavigate();

    const LinkButton = (props) => {
        const { to, text } = props;

        const clickHandler = () => {
            navigate(to);
        }

        return <Button size="large" onClick={clickHandler}>{text}</Button>
    }

    return (
        <Box>
            <Typography variant="h2">Home</Typography>
            <Stack spacing={2}>
                <LinkButton to='/book-modal' text='予約のモーダルへ' />
                <LinkButton to='/teacher-search' text='先生の検索画面へ' />
                <LinkButton to='/teacher-profile' text='先生のプロフィールへ' />
                <LinkButton to='/class-room' text='授業の部屋へ' />
            </Stack>
        </Box>
    )
}

export default Home