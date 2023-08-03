import { Fragment } from "react";
import { Container, Box, Button } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FromLanguage from "./FromLanguage";
import ToLanguage from "./ToLanguage";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

const UpBar = () => {
    const dispatch = useDispatch()
    const currentFromLanguage = useSelector((store) => store.fromLanguage);

    const languages = [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Frances' },
    ]

    const BoxLanguage = styled(Box)(() => ({
        width: '100%', height: '100%', display: 'flex', alignItems: 'center'
    }))

    const interchangeLanguages = () => {
        currentFromLanguage !== 'auto' ? dispatch({ type: 'INTERCHANGE_LANGUAGES' }) : false;
    }

    return (
        <Fragment>
            <Container sx={{ display: 'flex', height: '50px', alignItems: 'center' }} style={{ padding: '0px' }}>
                <BoxLanguage>
                    <FromLanguage languages={[{ value: 'auto', label: 'Auto' }, ...languages]} />
                </BoxLanguage>
                <Button onClick={() => interchangeLanguages()}>
                    <SwapHorizIcon fontSize="large" sx={{ color: 'white' }} />
                </Button>
                <BoxLanguage >
                    <ToLanguage languages={languages} />
                </BoxLanguage>
            </Container>
        </Fragment>
    );
}

export default UpBar;