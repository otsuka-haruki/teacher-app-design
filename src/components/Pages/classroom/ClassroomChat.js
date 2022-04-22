import { useState } from "react";
import { Box, CardContent, Typography, Button, TextField, Tabs, Tab } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import CardWithNoShadow from "components/common/CardWithNoShadow";
import CardActionsFlexRight from "components/common/CardActionsFlexRight";
import TabPanel from "components/common/TabPanel";

const ClassroomChat = () => {
    const [value, setValue] = useState(0);
    const isMobile = window.innerWidth < 660;

    const handleChange = (event, newValue) => setValue(newValue);

    const MessageBox = (props) => {
        const { message, align } = props;
        const justifyContent = align === 'right' ? 'end' : 'start';
        const backgroundColor = align === 'right' ? blue[500] : grey[100];
        const color = align === 'right' ? '#fff' : '#000';

        return (
            <Box sx={{ display: 'flex', mt: 1, mb: { xs: 2, lg: 1 }, justifyContent, }}>
                <Typography Typography variant="body1" sx={{ backgroundColor, color, pt: 1, pb: 1, pr: 2, pl: 2, borderRadius: '1rem', display: 'inline', fontSize: '1rem', maxWidth: { xs: '70%', lg: '40%' } }
                }>{message}</Typography >
            </Box>
        )
    }

    return (
        <CardWithNoShadow sx={{ pb: 0 }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 0 } }}>
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <Tab label="チャット" icon={<ChatRoundedIcon />} iconPosition='start' />
                    <Tab label="ファイル" icon={<InsertDriveFileRoundedIcon />} iconPosition='start' />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <CardWithNoShadow>
                        <CardContent sx={{ p: 0 }}>
                            <Box sx={{ p: { xs: 0, md: 1 }, height: '1000px', maxHeight: { lg: '60vh' }, overflow: 'scroll' }}>
                                <Typography variant="body1" sx={{ mt: 3, mb: 3, fontSize: '0.9rem', textAlign: 'center', color: grey[500], borderRadius: 10 }}>2022/04/09</Typography>
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ' align='right' />
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ' align='right' />
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ' align='right' />
                                <Typography variant="body1" sx={{ mt: 3, mb: 3, fontSize: '0.9rem', textAlign: 'center', color: grey[500], borderRadius: 10 }}>2022/04/10</Typography>
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ' align='right' />
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ' align='right' />
                                <Typography variant="body1" sx={{ mt: 3, mb: 3, fontSize: '0.9rem', textAlign: 'center', color: grey[500], borderRadius: 10 }}>2022/04/11</Typography>
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ' align='right' />
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ' align='right' />
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ' align='right' />
                                <MessageBox message='先生からのメッセージ' align='left' />
                                <MessageBox message='生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ' align='right' />
                            </Box>
                        </CardContent>
                        <CardActionsFlexRight sx={{ p: 0, pt: 2, pb: 2 }} >
                            {!isMobile && <Button size="large" sx={{ mr: 0.5 }}><UploadFileRoundedIcon /></Button>}
                            <TextField size="small" label='メッセージを入力' multiline fullWidth />
                            <Button size={isMobile ? 'normal' : 'large'} ><SendRoundedIcon /></Button >
                        </CardActionsFlexRight>
                    </CardWithNoShadow>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CardWithNoShadow>
                        <CardContent sx={{ p: 0 }}>
                            <Typography variant="h5">Files</Typography>
                        </CardContent>
                    </CardWithNoShadow>
                </TabPanel>
            </CardContent>
        </CardWithNoShadow>
    )
}

export default ClassroomChat