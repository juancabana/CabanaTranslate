import { Box, CssBaseline } from '@mui/material'
import UpBar from './UpBar'
import DownContent from './DownContent'
import Description from './Description'
import styled from '@emotion/styled'

const TranstalorContent = () => {

  const TranstalorWrapper = styled(Box)(() => ({
    backgroundColor: '#3B3B3B',
    minHeight: '500px',
    padding: '1rem',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'


  }))
  const BoxContainer = styled('div')(() => ({
    display: 'flex',
    padding: '0px 1rem',
    marginTop: '3rem',
    justifyContent: 'center',
    alignItems: 'center'
  }))

  return (
    <>
      <CssBaseline />
      <BoxContainer >
        <TranstalorWrapper>
          <UpBar />
          <DownContent />
          <Description />
        </TranstalorWrapper>
      </BoxContainer>
    </>
  );
}

export default TranstalorContent;