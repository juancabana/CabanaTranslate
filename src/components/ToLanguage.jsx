/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { useState } from "react";
import { Select, MenuItem} from '@mui/material'


const ToLanguage = ({languages}) => {
    const [toLanguage, setToLanguage] = useState(languages[1]);
    const handleChange = (index) => {
        setToLanguage(languages[index]);
    };
    return (
        <Fragment>
            <Select
                value={toLanguage.value}
                autoWidth
                label="From language"
            >
                {languages.map((language, index) => (
                    <MenuItem onClick={() => handleChange(index)} key={language.value} value={language.value}>{language.label}</MenuItem>
                ))}
            </Select>
        </Fragment>
    );
}

export default ToLanguage;