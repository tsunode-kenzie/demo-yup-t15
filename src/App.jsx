import AppRoutes from './routes'
import GloabalStyle from './styles/GlobalStyles'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <GloabalStyle />
      <AppRoutes />
      <ToastContainer />
    </>
  )
}

export default App
