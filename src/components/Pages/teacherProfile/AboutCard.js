import { useState } from "react";
import { Card, CardContent, Typography, Tabs, Tab } from "@mui/material";
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { teachers } from "assets/dummy_database/teacherSearch/database"
import TextBox from "./TextBox";
import TabPanel from "components/common/TabPanel";

const AboutCard = () => {
    const [value, setValue] = useState(0);
    const teacher = teachers[3];
    const { message } = teacher;

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">私について</Typography>
                <Tabs variant="fullWidth" value={value} onChange={handleChange} >
                    <Tab icon={<ChatRoundedIcon />} iconPosition="start" label="メッセージ" />
                    <Tab icon={<FaceRoundedIcon />} iconPosition="start" label="プロフィール" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TextBox title='メッセージ'>
                        <Typography variant="body1">{message}</Typography>
                    </TextBox>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TextBox title='経歴'>
                        <Typography variant="body1">高校 : 私立桜蔭高校</Typography>
                        <Typography variant="body1">中学 : 私立桜蔭中学</Typography>
                    </TextBox>
                    <TextBox title='指導歴'>
                        <Typography variant="body1">年数 : 1年半</Typography>
                        <Typography variant="body1">実績: 東京大学現役合格2人</Typography>
                    </TextBox>
                    <TextBox title='最寄りの路線'>
                        <Typography variant="body1">東京メトロ銀座線</Typography>
                    </TextBox>
                    <TextBox title='趣味・特技'>
                        <Typography variant="body1">ピアノ : 小学4年生から続けています</Typography>
                        <Typography variant="body1">映画 : 洋画が特に好きです</Typography>
                    </TextBox>
                </TabPanel>
            </CardContent>
        </Card>
    )
}

export default AboutCard