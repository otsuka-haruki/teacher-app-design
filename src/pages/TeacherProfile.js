import { Grid } from "@mui/material";
import ProfileHeader from "components/pages/teacherProfile/ProfileHeader";
import AboutCard from "components/pages/teacherProfile/AboutCard";
import DetailCard from "components/pages/teacherProfile/DetailCard";

const TeacherProfile = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ProfileHeader />
            </Grid>
            <Grid item xs={12} lg={4}>
                <AboutCard />
            </Grid>
            <Grid item xs={12} lg={8}>
                <DetailCard />
            </Grid>
        </Grid>
    )
}

export default TeacherProfile