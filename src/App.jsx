// import './App.css'
import { Fragment } from 'react'
import { Container, Box, CssBaseline, styled } from '@mui/material'
import UpBar from './components/UpBar'

const App = () => {

  const ContainerTranslator = styled(Box)(() => ({
    // backgroundColor: '#cfe8fc',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

  }))

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <ContainerTranslator>
          <Box sx={{ bgcolor: '#f1f1f1', minHeight: '600px', margin: '1rem', padding: '3rem', borderRadius: '10px' }}>
            <UpBar />
          </Box>
        </ContainerTranslator>
      </Container>
    </Fragment>
  )
}

export default App
