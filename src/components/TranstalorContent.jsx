import { Box, CssBaseline, useTheme  } from '@mui/material'
import UpBar from './UpBar'
import DownContent from './DownContent'
import styled from '@emotion/styled'

const TranstalorContent = () => {
  const theme = useTheme(); // Utiliza el hook useTheme para acceder al theme

  const TranstalorWrapper = styled(Box)(() => ({
    backgroundColor: '#4c4c4c',
    height: 'auto',
    padding: '1rem',
    borderRadius: '10px',
    boxSizing: 'border-box',
    // border: '1px solid #CFE0E5',

  }))
  const BoxContainer = styled('div')(() => ({
    height: 'calc(100vh - 65px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 1rem',
      height: 'calc(100vh - 57px)',
    },
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