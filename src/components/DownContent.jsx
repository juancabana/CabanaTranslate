import { Fragment, useEffect } from "react";
import { Container } from '@mui/material'
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getChatCompletion } from './../services/translate'
import { useDebounce } from "../hooks/useDebounce";



const ContainerContent = styled(Container)(() => ({
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',

}))

const InputText = styled('textarea')(() => ({
  width: '100%',
  padding: '10px',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: '#4c4c4c',
  fontSize: '20px',
  resize: 'none',
  color: 'white',
  '&::placeholder': {
    color: 'white',
  },
  


}))
const OutputText = styled('textarea')(() => ({
  width: '100%',
  padding: '10px',
  fontSize: '20px',
  borderRadius: '10px',
  border: '1px solid #ffffff',
  backgroundColor: '#3B3B3B',
  color: 'white',
  resize: 'none',

    fontStyle: 'italic',
  '&::placeholder': {
    color: 'white',
    fontStyle: 'italic',
  },


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
  }, [debouncedFromText, currentToLanguage, currentFromLanguage])




  const handleFromText = (e) => {
    const payload = e.target.value;
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }
  return (
    <Fragment>
      <ContainerContent style={{ padding: '0px', height: 'auto' }} >
        <InputText
          multiline
          rows={12}
          value={currentText}
          onChange={(e) => handleFromText(e)}
          placeholder="Write here" />

        <OutputText
          multiline
          rows={12}
          value={isLoading ? 'Loading...' : currentResult}
          disabled={true}
          placeholder="Translation" />
      </ContainerContent>
    </Fragment>
  );
}

export default DownContent;