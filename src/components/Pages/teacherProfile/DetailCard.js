import { useState } from "react";
import { Card, CardContent, Tabs, Tab, Typography, Chip, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { v4 as uuid } from "uuid";
import TextBox from "./TextBox";
import TabPanel from "components/common/TabPanel";
import ResponsiveStack from "components/common/ResponsiveStack";
import { tokyoMainCities } from "assets/dummy_database/teacherSearch/database";
import { red, teal } from "@mui/material/colors";
import { BoltRounded } from "@mui/icons-material";

const demoAvailableTimes = [
    { day: '月曜日', morning: 1, afternoon: 0, night: 1 },
    { day: '火曜日', morning: 1, afternoon: 0, night: 1 },
    { day: '水曜日', morning: 1, afternoon: 0, night: 1 },
    { day: '木曜日', morning: 1, afternoon: 0, night: 1 },
    { day: '金曜日', morning: 1, afternoon: 0, night: 1 },
    { day: '土曜日', morning: 1, afternoon: 0, night: 1 },
    { day: '日曜日', morning: 1, afternoon: 0, night: 1 }
]

const DetailCard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">指導可能な条件</Typography>
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab icon={<MenuBookRoundedIcon />} iconPosition="start" label="科目" />
                    <Tab icon={<LocationOnRoundedIcon />} iconPosition="start" label="地域" />
                    <Tab icon={<AccessTimeFilledRoundedIcon />} iconPosition="start" label="時間帯" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TextBox title="国語">
                        <Typography variant="body1">東大受験レベルまで指導ができます。入試成績は82点でした。</Typography>
                    </TextBox>
                    <TextBox title="算数・数学">
                        <Typography variant="body1">東大受験レベルまで指導ができます。入試成績は41点でした。</Typography>
                    </TextBox>
                    <TextBox title="英語">
                        <Typography variant="body1">東大受験レベルまで指導ができます。入試成績は91点でした。</Typography>
                    </TextBox>
                    <TextBox title="社会">
                        <Typography variant="body1">東大受験レベルまで指導ができます。入試成績は81点でした。</Typography>
                    </TextBox>
                    <TextBox title="理科">
                        <Typography variant="body1">東大受験レベルまで指導ができます。センター試験では化学基礎と地学基礎を選択しました。</Typography>
                    </TextBox>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TextBox title="オンライン指導">
                        <Typography variant="body1">対応しています</Typography>
                    </TextBox>
                    <TextBox title="路線">
                        <Typography variant="body1">東京メトロ銀座線</Typography>
                        <Typography variant="body1">東京メトロ丸の内線</Typography>
                    </TextBox>
                    <TextBox title="地域">
                        <Typography variant="body1">東京都</Typography>
                        <ResponsiveStack spacing={1}>
                            {tokyoMainCities.map((city, index) => {
                                if (index < 15) {
                                    return <Chip
                                        key={uuid()}
                                        label={city}
                                        color="primary"
                                        icon={<CheckCircleOutlineRoundedIcon />}
                                    />
                                } else {
                                    return <Chip
                                        key={uuid()}
                                        label={city}
                                        color="primary"
                                        variant="outlined"
                                        icon={<ChangeHistoryRoundedIcon />}
                                    />
                                }
                            })}
                        </ResponsiveStack>
                    </TextBox>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <TableContainer >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ pr: 0, pl: 0 }} align='center'>曜日</TableCell>
                                    <TableCell sx={{ pr: 0, pl: 0 }} align='center' >午前中</TableCell>
                                    <TableCell sx={{ pr: 0, pl: 0 }} align='center' >12時~18時</TableCell>
                                    <TableCell sx={{ pr: 0, pl: 0 }} align='center' >18時~</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {demoAvailableTimes.map(element => (
                                    <TableRow
                                        key={uuid()}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center' component="th" scope="row">
                                            {element.day}
                                        </TableCell>
                                        <TableCell align='center'><CheckCircleRoundedIcon sx={{ fontSize: '1.7rem', color: teal[500] }} /></TableCell>
                                        <TableCell align='center'><CancelRoundedIcon sx={{ fontSize: '1.7rem', color: red[500] }} /></TableCell>
                                        <TableCell align='center'><CheckCircleRoundedIcon sx={{ fontSize: '1.7rem', color: teal[500] }} /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
            </CardContent>
        </Card>
    )
}

export default DetailCard