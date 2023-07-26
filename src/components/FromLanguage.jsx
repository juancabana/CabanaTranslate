/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { useState } from "react";
import { Select, MenuItem} from '@mui/material'


const FromLanguage = ({languages}) => {
    const [fromLanguage, setFromLanguage] = useState(languages[0]);
    const handleChange = (index) => {
        setFromLanguage(languages[index]);
    };
    return (
        <Fragment>
            <Select
                value={fromLanguage.value}
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

export default FromLanguage;