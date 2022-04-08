import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Avatar, CardMedia, Chip, Stack, Box, Grid, CardActionArea } from "@mui/material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CardActionsFlexRight from "components/common/CardActionsFlexRight"
import { v4 as uuid } from "uuid";
import FlatContainedButton from "components/common/FlatContainedButton";

const TeacherCard = (props) => {
    const { name, major, age, sex, subjects, price, message } = props.data;
    const navigate = useNavigate();

    const profileImageUrl = props.data.profileImageUrl || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80';

    const bannerImageUrl = props.data.bannerImageUrl || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80';

    // * とりあえず全てデモページに飛ばす
    const goToTeacherProfilePage = () => navigate('/teacher-profile');

    return (
        // ?? Shadowアリとナシとどっちがいいかなあ
        <Card sx={{ border: 'none' }}>
            <CardActionArea onClick={goToTeacherProfilePage}>
                <CardMedia component="img" height={16 * 9} image={bannerImageUrl} sx={{ filter: 'brightness(90%)' }} />
                <CardContent sx={{ position: 'relative' }}>

                    <Box sx={{ position: 'absolute', top: '-3rem', left: '50%', transform: 'translateX(-50%)' }}>
                        <Avatar sx={{ width: '6rem', height: '6rem', border: '4px solid white' }} src={profileImageUrl} />
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{ mt: '3rem' }}>{name}</Typography>
                        <Typography variant="body1" sx={{ color: 'rgb(0 0 0 /0.7)' }}>東京大学・{major} / {age}歳・{sex}</Typography>
                    </Box>

                    <Stack direction='row' spacing={1} >
                        {subjects.map(subject => <Chip key={uuid()} label={subject} color='primary' />)}
                    </Stack>

                    <Box sx={{ mt: '1rem' }}>
                        <Typography variant="body1" sx={{ fontWeight: 700 }}>メッセージ</Typography>
                        <Typography variant="body1">{message}</Typography>
                    </Box>

                    <Grid container spacing={2} sx={{ mt: '0rem', textAlign: 'center' }}>
                        <Grid item xs={6}>
                            <Typography variant="body1">料金</Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>{price.contract}円 / 30分</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">体験レッスン</Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>{price.trial}円 / 30分</Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </CardActionArea>

            {window.innerWidth > 600 && <CardActionsFlexRight>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Button fullWidth variant="outlined" endIcon={<ArrowForwardRoundedIcon />}>詳しく</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <FlatContainedButton fullWidth>体験レッスン</FlatContainedButton>
                    </Grid>
                </Grid>
            </CardActionsFlexRight>}
        </Card>
    )
}

export default TeacherCard