import { Fragment } from "react";
import { Container, Box, Button } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FromLanguage from "./FromLanguage";
import ToLanguage from "./ToLanguage";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";

const UpBar = () => {

    const dispatch = useDispatch()

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
            <Container style={{ padding: '0px' }} sx={{ display: 'flex', height: '50px', alignItems: 'center' }}>
                <BoxLanguage>
                    <FromLanguage languages={languages} />
                </BoxLanguage>
                <Button onClick={() => dispatch({ type: 'INTERCHANGE_LANGUAGES' })}>
                    <SwapHorizIcon fontSize="large" sx={{ color: 'black' }} />
                </Button>
                <BoxLanguage >
                    <ToLanguage languages={languages} />
                </BoxLanguage>
            </Container>
        </Fragment>
    );
}

export default UpBar;