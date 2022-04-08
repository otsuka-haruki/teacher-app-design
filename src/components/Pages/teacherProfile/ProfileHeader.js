import { Box, Card, CardMedia, CardContent, Typography, Button, Avatar, Stack } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { teachers } from 'assets/dummy_database/teacherSearch/database';
import { breakpoints } from 'utils/globalVariables';
import CardActionsFlexRight from 'components/common/CardActionsFlexRight';

const ProfileHeader = () => {
    // TODO とりあえずの間に合わせでサイズを取っているので後々ちゃんとしたコードにすること
    const device = window.innerWidth < 600 ? 'xs' : 'sm';
    const teacher = teachers[3];
    const { bannerImageUrl, age, major, name, sex, profileImageUrl } = teacher;

    const profileWidth = device === 'xs' ? 16 * 6 : 16 * 8;
    const profileSx = {
        width: profileWidth,
        height: profileWidth,
        transform: { md: `translateY(-${profileWidth / 2 + 16}px)` },
        border: 'white 4px solid',
        mr: 2,
        mb: { xs: 1, md: 0 }
    }

    return (
        <Card>
            <CardMedia
                component="img"
                height={device === 'xs' ? 16 * 8 : 16 * 12}
                image={bannerImageUrl}
                alt="banner"
            />
            <CardContent>
                <Box sx={{ display: { xs: 'block', md: 'flex' }, height: { xs: 16 * 6, md: 16 * 3 }, transform: { xs: 'translateY(-80px)', md: 'none' } }}>
                    <Avatar
                        alt="Profile"
                        src={profileImageUrl}
                        sx={profileSx}
                    />
                    <Box>
                        <Typography variant="h5" sx={{ mr: 1 }}>{name}</Typography>
                        <Typography variant="body1" sx={{ color: 'rgb(0 0 0 /0.7)' }}>東京大学・{major} / {age}歳・{sex}</Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardActionsFlexRight>
                <Button variant="contained" size='large' endIcon={<SendRoundedIcon />}>体験授業を申し込む</Button>
            </CardActionsFlexRight>
        </Card>
    )
}

export default ProfileHeader