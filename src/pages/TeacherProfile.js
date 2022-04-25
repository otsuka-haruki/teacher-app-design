import { Grid } from "@mui/material";
import ProfileHeader from "components/pages/teacherProfile/ProfileHeader";
import AboutCard from "components/pages/teacherProfile/AboutCard";
import AboutCardPC from "components/pages/teacherProfile/AboutCardPC";
import DetailCard from "components/pages/teacherProfile/DetailCard";
import PriceCard from "components/pages/teacherProfile/PriceCard";
import MessageCardPC from "components/pages/teacherProfile/MessageCardPC";

const TeacherProfile = () => {
    const isMobile = window.innerWidth < 600;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ProfileHeader />
            </Grid>
            {!isMobile &&
                <>
                    <Grid item lg={4}>
                        <Grid container spacing={2} >
                            <Grid item lg={12}>
                                <PriceCard />
                            </Grid>
                            <Grid item lg={12}>
                                <AboutCardPC />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={8}>
                        <Grid container spacing={2}>
                            <Grid item lg={12}>
                                <MessageCardPC />
                            </Grid>
                            <Grid item lg={12}>
                                <DetailCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </>}
            {isMobile &&
                <>
                    <Grid item xs={12}>
                        <PriceCard />
                    </Grid>
                    <Grid item xs={12}>
                        <AboutCard />
                    </Grid>
                    <Grid item xs={12}>
                        <DetailCard />
                    </Grid>
                </>}
        </Grid>
    )
}

export default TeacherProfile