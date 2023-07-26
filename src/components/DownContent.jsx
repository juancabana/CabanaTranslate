import { Fragment } from "react";
import { Container, Box, Input } from '@mui/material'
import styled from "@emotion/styled";


const DownContent = () => {

  const InputText = styled('input')(() => ({
    
    width: '100%',
    minHeight: '400px',
    borderRadius: '10px'
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

  return (
    <Fragment>
      <ContainerContent style={{ padding: '0px' }} >
        <InputText style={{border: '1px solid #454545', backgroundColor: 'white'}} >

        </InputText>
        <BoxText style={{backgroundColor: '#dcdcdc'}} >

        </BoxText>
      </ContainerContent>
    </Fragment>
  );
}

export default DownContent;