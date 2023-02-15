import {Routes, Route} from 'react-router-dom'
//import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css';

/*npm i react-router-dom*/

function App() {
  return (
    <>
    <Routes>
        {/* <Route path="/" element={<Nav/>}> */}
        <Route path="/" index element={<Home/>}/>
        {/* <Route path="/use-effect-basics" element={<BasicsOfUseEffects/>}/> */}
        {/* </Route> */}
    </Routes>
    </>
  );
}

export default App;
