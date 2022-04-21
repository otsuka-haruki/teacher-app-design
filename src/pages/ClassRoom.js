import { Grid } from "@mui/material";
import ClassroomHeader from "components/Pages/classroom/ClassroomHeader";
import ClassroomChat from "components/Pages/classroom/ClassroomChat";
import ClassroomSidebox from "components/Pages/classroom/ClassroomSidebox";

const Classroom = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ClassroomHeader />
            </Grid>
            <Grid item xs={12} lg={8}>
                <ClassroomChat />
            </Grid>
            <Grid item xs={12} lg={4}>
                <ClassroomSidebox />
            </Grid>
        </Grid>
    )
}

export default Classroom