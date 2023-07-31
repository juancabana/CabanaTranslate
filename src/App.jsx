import { Provider } from 'react-redux'
import store from './store/store'
import TranstalorContent from './components/TranstalorContent'
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <TranstalorContent/>      
    </Provider>
  )
}

export default App
