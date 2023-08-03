import { Fragment } from "react";
import { Container, Box, Button } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FromLanguage from "./FromLanguage";
import ToLanguage from "./ToLanguage";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const UpBar = () => {
    const dispatch = useDispatch()
    const currentFromLanguage = useSelector((store) => store.fromLanguage);

    const languages = [
        { value: 'zh',  label: 'Chinese (中文)' },
        { value: 'es',  label: 'Spanish (Español)' },
        { value: 'en',  label: 'English' },
        { value: 'hi',  label: 'Hindi (हिन्दी)' },
        { value: 'ar',  label: 'Arabic (لعربية)' },
        { value: 'bn',  label: 'Bengali (বাংলা)' },
        { value: 'pt',  label: 'Portuguese' },
        { value: 'ru',  label: 'Russian (русский)' },
        { value: 'ja',  label: 'Japanese (日本語)' },
        { value: 'pa',  label: 'Punjabi (ਪੰਜਾਬੀ)' },
        { value: 'de',  label: 'German (Deutsch)' },
        { value: 'jv',  label: 'Javanese' },
        { value: 'id',  label: 'Indonesian' },
        { value: 'fr',  label: 'French' },
        { value: 'vi',  label: 'Vietnamese (Tiếng Việt)' }
      ];

    const BoxLanguage = styled(Box)(() => ({
        width: '100%', height: '100%', display: 'flex', alignItems: 'center'
    }))

    const interchangeLanguages = () => {
        currentFromLanguage !== 'auto' ? dispatch({ type: 'INTERCHANGE_LANGUAGES' }) : Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'You must select the language from which you are going to translate',
            background: '#3B3B3B',
            color: '#CFE0E5',
            confirmButtonColor: '#1976d2'
            

        });
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