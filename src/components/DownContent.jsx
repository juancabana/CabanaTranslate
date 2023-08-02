/* eslint-disable no-irregular-whitespace */
import { Fragment, useEffect, useState, useRef } from "react";
import { Container } from '@mui/material'
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getChatCompletion } from './../services/translate'
import { useDebounce } from "../hooks/useDebounce";



const ContainerContent = styled(Container)(() => ({
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  height: '100%'


}))


const DivText = styled('div')(() => ({
  width: 'calc(50% - .5rem)',
  minHeight: '400px',
  padding: '10px',
  border: 'none',
  backgroundColor: '#4c4c4c',
  fontSize: '20px',
  resize: 'none',
  color: 'white',



}))
const OutputText = styled('textarea')(() => ({
  width: 'calc(50% - .5rem)',
  padding: '10px',
  fontSize: '20px',
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
  const dispatch = useDispatch()

  const currentText = useSelector((store) => store.fromText);
  const currentToLanguage = useSelector((store) => store.toLanguage);
  const currentFromLanguage = useSelector((store) => store.fromLanguage);
  const currentResult = useSelector((store) => store.result);
  const isLoading = useSelector((store) => store.loading);
  const counter = useSelector((store) => store.counter);
  const isInterchange = useSelector((store) => store.interchange);

  let interval;

  const debouncedFromText = useDebounce(currentText);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const translate = async () => {
    const result = await getChatCompletion(currentText, currentFromLanguage, currentToLanguage);
    // dispatch({ type: 'RESET_COUNT' })
    if (!result.exceededLimit) {
      handleSetText(result.content)
    } else
      if (result.exceededLimit) {
        interval = setInterval(() => {
          // dispatch({ type: 'COUNT_DOWN' })
        }, 1000);
      }
  }

  useEffect(() => {
    divRef.current.textContent = currentResult
    // divRef.current.textContent === currentText ? divRef.current.textContent = 'Cambio' : divRef.current.textContent = 'Sin cambio';
  }, [isInterchange])

  useEffect(() => {
    if (counter === 0) {
      clearInterval(interval);
      translate()
    }
  }, [counter])

  // Every time the text or languages​​are changed this is executed
  useEffect(() => {
    debouncedFromText !== '' ? translate() : false;
  }, [debouncedFromText, currentToLanguage, currentFromLanguage])

  // Set the text to translate
  const handleFromText = (e) => {
    const payload = e.target.innerText;
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const handleSetText = (payload) => {
    dispatch({ type: 'SET_TEXT', payload })
  }

  // Remove the placeholder
  const removePlaceholder = () => {
    setShowPlaceholder(false);
  };

  // Add the placeholder
  const addPlaceholder = () => {
    currentText !== '' ? false : setShowPlaceholder(true);
  };

  const divRef = useRef(null);

  return (
    <Fragment>
      <ContainerContent style={{ padding: '0px' }} >
        <DivText
          contentEditable
          uppressContentEditableWarning={true}
          onInput={handleFromText}
          onFocus={removePlaceholder}
          onBlur={addPlaceholder}
          ref={divRef}
        >
          {showPlaceholder && 'Write here...'}
        </DivText>

        <OutputText
          multiline
          // rows={12}
          value={isLoading ? 'Loading...' : currentResult}
          disabled={true}
          placeholder="Translation" />
      </ContainerContent>
    </Fragment>
  );
}

export default DownContent;