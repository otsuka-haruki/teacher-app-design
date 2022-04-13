import { useState } from "react";
import { CardContent, Card, Typography, CardActions, Button, Tabs, Tab } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CurrencyYenRoundedIcon from '@mui/icons-material/CurrencyYenRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import TextBox from "./TextBox";
import TabPanel from "components/common/TabPanel";
import { teachers } from "assets/dummy_database/teacherSearch/database";

const PriceCard = () => {
    const [value, setValue] = useState(0);
    const teacher = teachers[3];

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Card sx={{ mb: 1.5, boxShadow: 'none' }}>
            <CardContent sx={{ pb: 0 }}>
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab icon={<CurrencyYenRoundedIcon />} iconPosition="start" label="料金" />
                    <Tab icon={<StarRoundedIcon />} iconPosition="start" label="指導実績" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TextBox title="料金">
                        <Typography variant="body1">{teacher.price.contract}円 /30分</Typography>
                        <Typography variant="body1">体験授業 {teacher.price.trial}円 /30分</Typography>
                    </TextBox>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TextBox title="生徒からの評価">
                        <Typography variant="body1">{teacher.teachingCareer.rating} / 5.0</Typography>
                    </TextBox>
                    <TextBox title="指導回数">
                        <Typography variant="body1">{teacher.teachingCareer.count}回</Typography>
                    </TextBox>
                    <TextBox title="合格実績">
                        <Typography variant="body1">{teacher.teachingCareer.result} </Typography>
                    </TextBox>
                </TabPanel>
            </CardContent>
            <CardActions>
                <Button variant="contained" fullWidth size="large" endIcon={<SendRoundedIcon />}>体験授業を申し込む</Button>
            </CardActions>
        </Card>
    )
}

export default PriceCard