/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'


const ToLanguage = ({ languages }) => {
    const [toLanguage, setToLanguage] = useState(languages[1]);
    const handleChange = (index) => {
        setToLanguage(languages[index]);
    };
    return (
        <Fragment>
            <FormControl sx={{  minWidth: 80, height: '100%', boxSizing: 'border-box' }}>
                <InputLabel id="demo-simple-select-autowidth-label">To</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={toLanguage.value}
                    autoWidth
                    label="To"
                >
                    {languages.map((language, index) => (
                        <MenuItem onClick={() => handleChange(index)} key={language.value} value={language.value}>{language.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </Fragment>
    );
}

export default ToLanguage;