import { Box, CssBaseline  } from '@mui/material'
import UpBar from './UpBar'
import DownContent from './DownContent'
import styled from '@emotion/styled'

const TranstalorContent = () => {

  const TranstalorWrapper = styled(Box)(() => ({
    backgroundColor: '#3B3B3B',
    minHeight: '500px',
    padding: '1rem',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '1200px'


  }))
  const BoxContainer = styled('div')(() => ({
    display: 'flex',
    padding: '0px 1rem',
    marginTop: '3rem',
    justifyContent: 'center',
    alignItems: 'center'
    // [theme.breakpoints.down('sm')]: {
    //   // height: 'calc(100vh - 57px)',
    // },
  }))


  return (
    <>
      <CssBaseline />
      <BoxContainer >
        <TranstalorWrapper>
          <UpBar />
          <DownContent />
        </TranstalorWrapper>
      </BoxContainer>
    </>
  );
}

export default TranstalorContent;