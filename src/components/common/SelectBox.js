import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 as uuid } from 'uuid';

const SelectBox = (props) => {
    const { label, options, icon } = props;
    const [selectedOption, setSelectedOption] = useState('');


    const handleChange = event => setSelectedOption(event.target.value);

    const menuItems = options.map(option => <MenuItem key={uuid()} value={option}>{option}</MenuItem>)

    return (
        <FormControl fullWidth>
            <InputLabel sx={{ display: 'flex', alignItems: 'center' }}>{label}</InputLabel>
            <Select value={selectedOption} label={label} onChange={handleChange}>
                {menuItems}
            </Select>
        </FormControl >
    )
}

export default SelectBox