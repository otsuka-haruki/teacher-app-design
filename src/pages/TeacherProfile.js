import { Grid } from "@mui/material";
import ProfileHeader from "components/Pages/teacherProfile/ProfileHeader";
import AboutCard from "components/Pages/teacherProfile/AboutCard";
import AboutCardPC from "components/Pages/teacherProfile/AboutCardPC";
import DetailCard from "components/Pages/teacherProfile/DetailCard";
import PriceCard from "components/Pages/teacherProfile/PriceCard";

const TeacherProfile = () => {
    const isMobile = window.innerWidth < 600;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ProfileHeader />
            </Grid>
            <Grid item xs={12} md={4}>
                <PriceCard />
                {isMobile ? <AboutCard /> : <AboutCardPC />}
            </Grid>
            <Grid item xs={12} md={8}>
                <DetailCard />
            </Grid>
        </Grid>
    )
}

export default TeacherProfile