import { Grid } from "@mui/material"
import TeacherCard from "components/Pages/teacherSearch/TeacherCard";
import { v4 as uuid } from "uuid";

const dummyTeachers = [
    { name: '佐藤大輝' },
    { name: '鈴木まり' },
    { name: '高橋俊介' },
    { name: '田中理奈' },
]

const TeacherSearch = () => {

    const teacherCards = dummyTeachers.map(teacher => {
        return (
            <Grid item xs={12} sm={4} key={uuid()}>
                <TeacherCard data={teacher} />
            </Grid>
        )
    })
    return (
        <Grid container spacing={2}>
            {teacherCards}
        </Grid>
    )
}

export default TeacherSearch