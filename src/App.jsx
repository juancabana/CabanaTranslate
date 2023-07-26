
import { Container, Box, CssBaseline, styled } from '@mui/material'
import UpBar from './components/UpBar'
import DownContent from './components/DownContent'
import { Provider } from 'react-redux'
import store from './store/store'
import {completion} from './services/translate'
import { useEffect } from 'react'


const App = () => {
  useEffect(() => {

    completion()
  }, [])

  const ContainerTranslator = styled(Box)(() => ({
    // backgroundColor: '#cfe8fc',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

  }))

  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <ContainerTranslator>
          <Box sx={{ bgcolor: '#f1f1f1', minHeight: '600px', margin: '1rem', padding: '3rem', borderRadius: '10px' }}>
            <UpBar />
            <DownContent />
          </Box>
        </ContainerTranslator>
      </Container>
    </Provider>
  )
}

export default App
