import { Grid } from "@mui/material";
import { v4 as uuid } from "uuid";
import { teachers } from "assets/dummy_database/teacherSearch/database";
import TeacherCard from "components/pages/teacherSearch/TeacherCard";

const TeacherCards = () => {
    const teacherCards = teachers.map(teacher => {
        return (
            <Grid item xs={12} sm={6} lg={4} key={uuid()}>
                <TeacherCard data={teacher} />
            </Grid>
        )
    });

    return (
        <Grid container spacing={2} >
            {teacherCards}
        </Grid >
    )
}

export default TeacherCards