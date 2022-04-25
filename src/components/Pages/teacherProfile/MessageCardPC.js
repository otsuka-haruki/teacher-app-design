import { CardContent, Typography } from "@mui/material";
import { teachers } from "assets/dummy_database/teacherSearch/database"
import TextBox from "./TextBox";
import CardWithNoShadow from "components/common/CardWithNoShadow";

const MessageCardPC = () => {
    const teacher = teachers[3];
    const { message } = teacher;

    return (
        <CardWithNoShadow>
            <CardContent>
                <Typography variant="h5">メッセージ</Typography>
                <Typography variant="body1">{message}</Typography>
            </CardContent>
        </CardWithNoShadow>
    )
}

export default MessageCardPC