import { Fragment } from "react";
import { Container, Box } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FromLanguage from "./FromLanguage";
import ToLanguage from "./ToLanguage";
import styled from "@emotion/styled";

const UpBar = () => {
    const languages = [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Frances' },
    ]


    const BoxLanguage = styled(Box)(() => ({
        width: '100%', height: '100%'
    }))

    return (
        <Fragment>
            <Container sx={{ display: 'flex', height: '50px', alignItems: 'center' }}>
                <BoxLanguage>
                    <FromLanguage languages={languages} />
                </BoxLanguage>
                <SwapHorizIcon fontSize="large" />
                <BoxLanguage >
                    <ToLanguage languages={languages} />
                </BoxLanguage>
            </Container>
        </Fragment>
    );
}

export default UpBar;