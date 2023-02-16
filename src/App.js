import {Routes, Route} from 'react-router-dom'
//import Nav from './components/Nav';
import Home from './pages/Home';
import SecondTimer from './pages/SecondTimer';
import './App.css';

/*npm i react-router-dom*/

function App() {
  return (
    <>
    <Routes>
        {/* <Route path="/" element={<Nav/>}> */}
        <Route path="/" index element={<Home/>}/>
        <Route path="/second-timer" element={<SecondTimer/>}/>
        {/* <Route path="/use-effect-basics" element={<BasicsOfUseEffects/>}/> */}
        {/* </Route> */}
    </Routes>
    </>
  );
}

export default App;
