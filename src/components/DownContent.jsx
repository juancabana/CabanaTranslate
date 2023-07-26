import { Fragment } from "react";
import { Container, Box } from '@mui/material'
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";


const DownContent = () => {
  const dispatch = useDispatch()

  const InputText = styled('input')(() => ({
    width: '100%',
    height: '400px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
  }))
  const BoxText = styled(Box)(() => ({
    
    width: '100%',
    minHeight: '400px',
    borderRadius: '10px'
  }))
  const ContainerContent = styled(Container)(() => ({
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  }))

  const handleFromText = (payload) => {
    dispatch({type: 'SET_FROM_TEXT', payload})
  }
  return (
    <Fragment>
      <ContainerContent style={{ padding: '0px' }} >
        <InputText type="text" onChange={(e) => handleFromText(e.target.value)} placeholder="Write here" style={{border: '1px solid #454545', backgroundColor: 'white'}} >

        </InputText>
        <BoxText style={{backgroundColor: '#dcdcdc'}} >

        </BoxText>
      </ContainerContent>
    </Fragment>
  );
}

export default DownContent;