import { Card, CardContent, Typography, Button, Avatar, CardMedia, Chip, Stack } from "@mui/material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CardActionsFlexRight from "components/common/CardActionsFlexRight"

const TeacherCard = (props) => {
    const { name, major, age, sex, subjects, price } = props.data;

    const profileImageUrl = props.data.profileImageUrl || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80';

    const bannerImageUrl = props.data.bannerImageUrl || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80';

    return (
        <Card>
            <CardMedia
                component="img"
                height={16 * 10}
                image={bannerImageUrl}
                alt="teacher profile banner"
            />
            <CardContent>
                <Avatar alt='avatar' sx={{ width: '6rem', height: '6rem' }} src={profileImageUrl} />
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body1">東京大学・{major}</Typography>
                <Typography variant="body1">{age}歳・{sex}</Typography>
                <Stack direction='row' spacing={1}>
                    {subjects.map(subject => <Chip label={subject} variant='outlined' color='primary' />)}
                </Stack>
                <Typography variant="body1">体験レッスン : 30分{price.trial}円</Typography>
            </CardContent>
            <CardActionsFlexRight>
                <Button fullWidth variant="outlined" endIcon={<ArrowForwardRoundedIcon />}>詳しく</Button>
            </CardActionsFlexRight>
        </Card>
    )
}

export default TeacherCard