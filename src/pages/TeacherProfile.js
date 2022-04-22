import { Grid } from "@mui/material";
import ProfileHeader from "components/pages/teacherProfile/ProfileHeader";
import AboutCard from "components/pages/teacherProfile/AboutCard";
import AboutCardPC from "components/pages/teacherProfile/AboutCardPC";
import DetailCard from "components/pages/teacherProfile/DetailCard";
import PriceCard from "components/pages/teacherProfile/PriceCard";

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