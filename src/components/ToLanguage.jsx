/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Select, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";



const ToLanguage = ({ languages }) => {
    const dispatch = useDispatch();
    const currentToLanguage = useSelector((store) => store.toLanguage);

    const handleChange = (index) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload: languages[index].value })
    };

    return (
        <Fragment>

            <Select
                value={currentToLanguage}
                autoWidth
                sx={{
                    width: "100%",
                    height: 40,
                    border: "1px solid #ffffff",
                    color: "#fff",
                    borderRadius: '0px',

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

export default ToLanguage;