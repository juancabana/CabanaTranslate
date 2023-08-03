/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Select, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


const ToLanguage = ({ languages }) => {
    const dispatch = useDispatch();
    const { fromLanguage, toLanguage } = useSelector((store) => store);

    const handleChange = (index) => {
        languages[index].value !== fromLanguage ? dispatch({ type: 'SET_TO_LANGUAGE', payload: languages[index].value }) : Toast.fire({
            icon: 'warning',
            title: 'Source language is equal to the language to be translated'
        })
    };

    return (
        <Fragment>
            <Select
                value={toLanguage}
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