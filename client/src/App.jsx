import { BrowserRouter as Router } from 'react-router-dom'
import AuthRoutes from './Routes/AuthRoutes.jsx';
import MainRoutes from './Routes/MainRoutes.jsx';

function App() {
  return (
    <>
      <Router>
        <MainRoutes />
        <AuthRoutes />
      </Router>
    </>
  )
}

export default App;
