import { useState, useRef } from "react";
import { Box, Modal, Button, Card, CardContent, CardActions, Typography, FormControlLabel, Checkbox, Snackbar } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CurrencyYenRoundedIcon from '@mui/icons-material/CurrencyYenRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

const BookModal2 = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const confirmButton = useRef();
    const checkboxRef = useRef();

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    const handleSnackbarClose = () => setSnackbarOpen(false);
    const confirmAndClose = () => {
        if (isChecked) {
            setSnackbarOpen(true);
            setModalOpen(false);
        } else {
            checkboxRef.current.style.border = '1px solid #ff5252';
        }

    }
    const handleCheckboxClick = (event) => {
        const isChecked = event.target.checked;
        setIsChecked(isChecked);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        padding: '1.5rem 1.5rem 1rem'
    };

    const ContentBox = (props) => {
        return (
            <Box sx={{ mb: '0.8rem' }}>
                <Typography variant="body1" sx={{ display: 'flex', mb: '0.2rem' }}>{props.icon}{props.title}</Typography>
                <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>{props.content}</Typography>
            </Box>
        );
    }

    return (
        <>
            <Modal open={modalOpen} onClose={handleClose}>
                <Card sx={style}>
                    <CardContent>
                        <Typography variant="h5" sx={{ mb: '1rem', textAlign: 'center' }}>????????????</Typography>
                        <Box sx={{ mb: '2rem' }}>
                            <ContentBox title='???????????????' content='????????????' icon={<AccountCircleRoundedIcon sx={{ mr: '0.5rem' }} />} />
                            <ContentBox title='?????????' content='17:00~18:30' icon={<AccessTimeRoundedIcon sx={{ mr: '0.5rem' }} />} />
                            <ContentBox title='??????' content='?????????' icon={<MenuBookRoundedIcon sx={{ mr: '0.5rem' }} />} />
                            <ContentBox title='??????' content='5500???' icon={<CurrencyYenRoundedIcon sx={{ mr: '0.5rem' }} />} />
                        </Box>
                        <Typography variant="body1">????????????????????????????????????????????????????????????????????????????????????????????????</Typography>
                        <FormControlLabel sx={{ borderRadius: '5px', padding: '0.2rem' }} ref={checkboxRef} control={<Checkbox onClick={handleCheckboxClick} />} label="??????????????????????????????????????????" />
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button sx={{ width: '50%' }} onClick={handleClose}>??????</Button>
                        <Button sx={{ width: '50%' }} variant="contained" onClick={confirmAndClose} ref={confirmButton}>????????????????????????</Button>
                    </CardActions>
                </Card>
            </Modal>
            <Button variant="contained" onClick={handleOpen}>Example Modal 2</Button>

            <Snackbar open={snackbarOpen} onClose={handleSnackbarClose} autoHideDuration={3000} message="??????????????????????????????" />
        </>
    )
}

export default BookModal2;