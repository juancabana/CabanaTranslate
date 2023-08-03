/* eslint-disable no-irregular-whitespace */
import { Fragment, useEffect, useState } from "react";
import { Container, Button } from '@mui/material'
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getChatCompletion } from './../services/translate'
import Swal from "sweetalert2";


const ContainerContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
}))

const DivText = styled('textarea')(({ theme }) => ({
  width: 'calc(50% - .5rem)',
  minHeight: '400px',
  padding: '10px',
  border: 'none',
  backgroundColor: '#4c4c4c',
  fontSize: '20px',
  resize: 'none',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    minHeight: '200px',
    Height: '100%',
    width: '100%',
    flexDirection: 'column'
  },
}))

const OutputText = styled('textarea')(({ theme }) => ({
  width: 'calc(50% - .5rem)',
  padding: '10px',
  fontSize: '20px',
  border: '1px solid #ffffff',
  backgroundColor: '#3B3B3B',
  color: 'white',
  resize: 'none',
  fontStyle: 'italic',
  '&::placeholder': {
    fontStyle: 'italic',
    color: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '200px',

    Height: '100%',
    width: '100%',
    flexDirection: 'column'
  },
}))

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

const DownContent = () => {

  const dispatch = useDispatch()

  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const { fromText, toLanguage, fromLanguage, result, loading, isManual } = useSelector((store) => store);

  const translate = async () => {
    if (fromText !== '') {
      dispatch({ type: 'LOADING' })
      const result = await getChatCompletion(fromText, fromLanguage, toLanguage);
      !result.exceededLimit ? handleSetText(result.content) : handleSetText(result.content);
    } else {
      Toast.fire({
        icon: 'warning',
        title: 'You must write something to translate'
      })
    }

  }

  // Every time the text or languages​​are changed this is executed
  useEffect(() => {
    fromText !== '' && translate()
  }, [toLanguage, fromLanguage])

  // Set the text to translate
  const handleFromText = (e) => {
    const payload = e.target.value;
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
    fromText !== '' ? false : setShowPlaceholder(true);
  };

  return (
    <Fragment>
      <>
        <ContainerContent style={{ padding: '0px' }} >
          <DivText
            onChange={handleFromText}
            onFocus={removePlaceholder}
            onBlur={addPlaceholder}
            value={showPlaceholder ? 'Write here...' : fromText}
          >
          </DivText>
          <OutputText
            multiline
            value={loading ? 'Loading...' : result}
            disabled={true}
            placeholder="Translation" />
        </ContainerContent>
      </>
      {isManual && <Button onClick={() => translate()} variant="contained" style={{ maxWidth: '150px', marginBottom: '.5rem' }}>Translate</Button>}
      <hr style={{ width: '100%' }} />
    </Fragment>
  );
}

export default DownContent;
