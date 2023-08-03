import { Provider } from 'react-redux'
import store from './store/store'
import TranstalorContent from './components/TranstalorContent'
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';

const App = () => {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div style={{ minHeight: '100vh' }}>
          <Header />
          <TranstalorContent />
        </div>
      </Provider>
    </ThemeProvider>
  )
}

export default App
