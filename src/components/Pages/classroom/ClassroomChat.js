import { useState } from "react";
import { Box, CardContent, Typography, Button, TextField, Tabs, Tab } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import CardWithNoShadow from "components/common/CardWithNoShadow";
import CardActionsFlexRight from "components/common/CardActionsFlexRight";
import TabPanel from "components/common/TabPanel";


const ClassroomChat = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);


    const MessageBox = (props) => {
        const { message, align } = props;
        const justifyContent = align === 'right' ? 'end' : 'start';
        const backgroundColor = align === 'right' ? blue[200] : blueGrey[100];

        return (
            <Box sx={{ display: 'flex', mt: 1, mb: 1, justifyContent, }}>
                <Typography Typography variant="body1" sx={{ backgroundColor, pt: 1, pb: 1, pr: 2, pl: 2, borderRadius: '10rem', display: 'inline', boxShadow: '0px 5px 15px rgb(0 0 0 / 0.05)', fontSize: '0.9rem' }
                }>{message}</Typography >
            </Box>
        )
    }

    return (
        <CardWithNoShadow>
            <CardContent>
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <Tab label="Chat" />
                    <Tab label="Files" />
                </Tabs>
                <Box sx={{ pt: 2, height: '400px', overflow: 'scroll' }}>
                    <Typography variant="body1" sx={{ m: 1, textAlign: 'center', color: grey[500] }}>2022/04/09</Typography>
                    <MessageBox message='先生からのメッセージ' align='left' />
                    <MessageBox message='先生からのメッセージ' align='left' />
                    <MessageBox message='生徒からのメッセージ' align='right' />
                    <MessageBox message='先生からのメッセージ' align='left' />
                    <MessageBox message='生徒からのメッセージ' align='right' />
                    <MessageBox message='先生からのメッセージ' align='left' />
                    <MessageBox message='生徒からのメッセージ' align='right' />
                    <Typography variant="body1" sx={{ m: 1, textAlign: 'center', color: grey[500] }}>2022/04/10</Typography>
                    <MessageBox message='先生からのメッセージ' align='left' />
                    <MessageBox message='生徒からのメッセージ' align='right' />
                    <MessageBox message='先生からのメッセージ' align='left' />
                    <MessageBox message='生徒からのメッセージ' align='right' />
                </Box>
            </CardContent>
            <CardActionsFlexRight sx={{ pb: 2 }} >
                <TextField variant="standard" size="small" fullWidth sx={{ pr: 2 }} />
                <Button variant="outlined"><UploadFileRoundedIcon /></Button>
                <Button variant="contained"><SendRoundedIcon /></Button>
            </CardActionsFlexRight>
        </CardWithNoShadow>
    )
}

export default ClassroomChat