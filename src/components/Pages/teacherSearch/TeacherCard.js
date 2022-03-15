import { Card, CardContent, Typography, Button, Avatar } from "@mui/material"
import CardActionsFlexRight from "components/common/CardActionsFlexRight"

const TeacherCard = (props) => {
    const { name } = props.data;

    return (
        <Card>
            <CardContent>
                <Avatar alt='avatar' src='/src/assets/images/face-1.jpg' />
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body1">東京大学・文学部・3年生</Typography>
            </CardContent>
            <CardActionsFlexRight>
                <Button variant="outlined">詳しく</Button>
            </CardActionsFlexRight>
        </Card>
    )
}

export default TeacherCard