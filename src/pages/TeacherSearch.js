import { Grid } from "@mui/material";
import { v4 as uuid } from "uuid";
import { dummyTeachers } from "assets/dummy_database/teachers";
import TeacherCard from "components/Pages/teacherSearch/TeacherCard";

const TeacherSearch = () => {
    const teacherCards = dummyTeachers.map(teacher => {
        return (
            <Grid item xs={12} sm={4} xl={3} key={uuid()}>
                <TeacherCard data={teacher} />
            </Grid>
        )
    });

    return (
        <Grid container spacing={2}>
            {teacherCards}
        </Grid>
    )
}

export default TeacherSearch