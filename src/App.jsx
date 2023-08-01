import { Provider } from 'react-redux'
import store from './store/store'
import TranstalorContent from './components/TranstalorContent'
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <TranstalorContent/>      
    </Provider>
  )
}

export default App
