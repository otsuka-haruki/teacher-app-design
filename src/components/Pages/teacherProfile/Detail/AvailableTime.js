import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { teal, red, amber } from "@mui/material/colors";
import { v4 as uuid } from "uuid";
import { demoAvailableTimes } from "assets/dummy_database/teacherSearch/database";

const AvailableIcon = () => <CheckCircleRoundedIcon sx={{ fontSize: '1.8rem', color: teal[500] }} />;
const UnavailabeIcon = () => <CancelRoundedIcon sx={{ fontSize: '1.8rem', color: red[500] }} />;
const UnknownIcon = () => <HelpRoundedIcon sx={{ fontSize: '1.8rem', color: amber[500] }} />;

const AvailableTime = () => {
    return (
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ pr: 0, pl: 0 }} align='center'>曜日</TableCell>
                        <TableCell sx={{ pr: 0, pl: 0 }} align='center' >午前中</TableCell>
                        <TableCell sx={{ pr: 0, pl: 0 }} align='center' >お昼</TableCell>
                        <TableCell sx={{ pr: 0, pl: 0 }} align='center' >夕方</TableCell>
                        <TableCell sx={{ pr: 0, pl: 0 }} align='center' >夜</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {demoAvailableTimes.map((element, index) => (
                        <TableRow
                            key={uuid()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align='center' component="th" scope="row" sx={{ fontWeight: { xs: 500, md: 400 } }}>
                                {window.innerWidth < 600 ? element.day.substring(0, 1) : element.day}
                            </TableCell>
                            <TableCell align='center'>{index % 2 === 0 ? <AvailableIcon /> : <UnknownIcon />}</TableCell>
                            <TableCell align='center'><UnavailabeIcon /></TableCell>
                            <TableCell align='center'>{index % 2 === 0 ? <AvailableIcon /> : <UnavailabeIcon />}</TableCell>
                            <TableCell align='center'><AvailableIcon /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AvailableTime