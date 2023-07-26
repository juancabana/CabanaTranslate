// import './App.css'
import { Fragment } from 'react'
import { Container, Box, CssBaseline, styled } from '@mui/material'
import UpBar from './components/UpBar'

const App = () => {

  const ContainerTranslator = styled(Box)(() => ({
    backgroundColor: '#cfe8fc',
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
          <Box sx={{ bgcolor: '#ffffff', minHeight: '600px', margin: '1rem' }}>
            <UpBar />
          </Box>
        </ContainerTranslator>
      </Container>
    </Fragment>
  )
}

export default App
