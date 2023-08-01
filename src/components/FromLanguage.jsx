/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Select, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";

const FromLanguage = ({ languages }) => {
    const dispatch = useDispatch();
    const currentFromLanguage = useSelector((store) => store.fromLanguage);

    const handleChange = (index) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload: languages[index].value })
    };
    return (

        <Fragment>
            <Select
                value={currentFromLanguage}
                autoWidth
                // label="From "
                sx={{
                    width: "100%",
                    height: 40,
                    border: "1px solid #ffffff",
                    borderRadius: '0px',
                    color: "#fff",
                    "& .MuiSvgIcon-root": {
                        color: "white",
                    },
                }}
            >
                {languages.map((language, index) => (
                    <MenuItem onClick={() => handleChange(index)} key={language.value} value={language.value}>{language.label}</MenuItem>
                ))}
            </Select>

        </Fragment>
    );
}

export default FromLanguage;