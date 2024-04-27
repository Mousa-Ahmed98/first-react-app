
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterPaths } from './components/RouterPaths/RouterPaths';
import {NavBar} from './components/NavBar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
      <>
        <BrowserRouter>
        <NavBar></NavBar>
        <RouterPaths></RouterPaths>
        </BrowserRouter>
      </>
  );
}

export default App;
