/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";

const FromLanguage = ({languages}) => {
    const dispatch = useDispatch();
    const currentFromLanguage = useSelector((store) => store.fromLanguage);
    
    const handleChange = (index) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload: languages[index].value })
    };
    return (
        
        <Fragment>
            <FormControl sx={{  minWidth: 80, width: '100%', height: '100%', boxSizing: 'border-box' }}>
                <InputLabel id="demo-simple-select-autowidth-label">From</InputLabel>
            <Select
                value={currentFromLanguage}
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