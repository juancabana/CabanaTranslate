/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";



const ToLanguage = ({ languages }) => {
    const dispatch = useDispatch();
    const currentToLanguage = useSelector((store) => store.toLanguage);

    const handleChange = (index) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload: languages[index].value })
    };
    
    return (
        <Fragment>
            <FormControl sx={{ minWidth: 80, width: '100%', height: '100%', boxSizing: 'border-box' }}>
                <InputLabel id="demo-simple-select-autowidth-label">To</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={currentToLanguage}
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