import { CardContent, Typography } from "@mui/material";
import CardWithNoShadow from "components/common/CardWithNoShadow";

const ClassroomHeader = () => {
    return (
        <CardWithNoShadow>
            <CardContent>
                <Typography variant="h3" >Header</Typography>
            </CardContent>
        </CardWithNoShadow>
    )
}

export default ClassroomHeader