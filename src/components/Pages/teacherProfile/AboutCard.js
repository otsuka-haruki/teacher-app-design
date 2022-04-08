import { Box, Card, CardContent, Typography } from "@mui/material"
import { teachers } from "assets/dummy_database/teacherSearch/database"

const AboutCard = () => {
    const teacher = teachers[3];
    const { message } = teacher;

    const TextBox = props => {
        const { title, children } = props;

        return (
            <Box sx={{ mt: 2 }}>
                <Typography variant="h6">{title}</Typography>
                {children}
            </Box>
        )
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">About</Typography>
                <TextBox title='メッセージ'>
                    <Typography variant="body1">{message}</Typography>
                </TextBox>
                <TextBox title='経歴'>
                    <Typography variant="body1">高校 : 私立桜蔭高校</Typography>
                    <Typography variant="body1">中学 : 私立桜蔭中学</Typography>
                </TextBox>
                <TextBox title='最寄りの路線'>
                    <Typography variant="body1">東京メトロ銀座線</Typography>
                </TextBox>
            </CardContent>
        </Card>
    )
}

export default AboutCard