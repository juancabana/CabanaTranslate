import { Fragment, useEffect } from "react";
import { Container, Box, TextField } from '@mui/material'
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getChatCompletion } from './../services/translate'
import { useDebounce } from "../hooks/useDebounce";



const ContainerContent = styled(Container)(() => ({
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
}))

const InputText = styled(TextField)(() => ({
  width: '100%',
  padding: '0px',
  fontSize: '16px',
  borderRadius: '10px',
  border: 'none',
}))
const OutputText = styled(TextField)(() => ({
  width: '100%',
  padding: '0px',
  fontSize: '16px',
  borderRadius: '10px',
  border: 'none',
}))



const DownContent = () => {
  const currentText = useSelector((store) => store.fromText);
  const currentToLanguage = useSelector((store) => store.toLanguage);
  const currentFromLanguage = useSelector((store) => store.fromLanguage);
  const currentResult = useSelector((store) => store.result);
  const isLoading = useSelector((store) => store.loading);


  const dispatch = useDispatch()
  const debouncedFromText = useDebounce(currentText);

  const handleSetText = (payload) => {
    dispatch({ type: 'SET_TEXT', payload })
  }


  const translate = async () => {
    const result = await getChatCompletion(currentText, currentFromLanguage, currentToLanguage);
    handleSetText(result)
  }
  useEffect(() => {
    debouncedFromText !== '' ? translate() : false;
  }, [debouncedFromText])




  const handleFromText = (e) => {
    const payload = e.target.value;
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }
  return (
    <Fragment>
      <ContainerContent style={{ padding: '0px' }} >
        
          <InputText multiline rows={12}  value={currentText} onChange={(e) => handleFromText(e)} placeholder="Write here" />

          
          <OutputText multiline rows={12}  value={isLoading ? 'Loading...' : currentResult} disabled={true} placeholder="Translate"/>
      </ContainerContent>
    </Fragment>
  );
}

export default DownContent;