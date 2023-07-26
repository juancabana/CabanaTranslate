/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'


const FromLanguage = ({languages}) => {
    const [fromLanguage, setFromLanguage] = useState(languages[0]);
    const handleChange = (index) => {
        setFromLanguage(languages[index]);
    };
    return (
        <Fragment>
            <FormControl sx={{  minWidth: 80, height: '100%', boxSizing: 'border-box' }}>
                <InputLabel id="demo-simple-select-autowidth-label">From</InputLabel>
            <Select
                value={fromLanguage.value}
                autoWidth
                label="From "
            >
                {languages.map((language, index) => (
                    <MenuItem onClick={() => handleChange(index)} key={language.value} value={language.value}>{language.label}</MenuItem>
                ))}
            </Select>
            </FormControl>

        </Fragment>
    );
}

export default FromLanguage;