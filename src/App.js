import './custom_bootstrap/custom_bootstrap.scss';
import Views from './Views';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Views/>
    </BrowserRouter>
  );
}

export default App;
