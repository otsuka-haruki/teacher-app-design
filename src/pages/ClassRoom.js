import { useTheme } from '@mui/material/styles';
import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import ClassroomHeader from "components/Pages/classroom/ClassroomHeader";
import ClassroomChat from "components/Pages/classroom/ClassroomChat";
import ClassroomSidebox from "components/Pages/classroom/ClassroomSidebox";

const Classroom = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Grid container spacing={2}>
            {isDesktop &&
                <>
                    <Grid item xs={12} lg={8}>
                        <ClassroomChat />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <ClassroomHeader />
                            </Grid>
                            <Grid item xs={12}>
                                <ClassroomSidebox />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
            {!isDesktop &&
                <>
                    <Grid item xs={12}>
                        <ClassroomHeader />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <ClassroomChat />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid item xs={12}>
                            <ClassroomSidebox />
                        </Grid>
                    </Grid>
                </>}
        </Grid>
    )
}

export default Classroom