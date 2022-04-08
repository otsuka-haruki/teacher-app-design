import { useState } from "react";
import { Box, Card, CardContent, Tabs, Tab, Typography } from "@mui/material";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div hidden={value !== index}>
            {value === index && <Box sx={{ p: 3 }}>{children} </Box>}
        </div>
    );
}

const DetailCard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">指導可能な条件</Typography>
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab icon={<MenuBookRoundedIcon />} iconPosition="start" label="科目" />
                    <Tab icon={<LocationOnRoundedIcon />} iconPosition="start" label="地域" />
                    <Tab icon={<AccessTimeFilledRoundedIcon />} iconPosition="start" label="時間帯" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Typography variant="body1">Item 1</Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography variant="body1">Item 2</Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Typography variant="body1">Item 3</Typography>
                </TabPanel>
            </CardContent>
        </Card>
    )
}

export default DetailCard