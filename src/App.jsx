import {HashRouter,Routes,Route} from 'react-router'
import './App.css'
import AbooutMe from './components/AboutMe'
import Home from './components/Home'

function App() {
  return <HashRouter>
    <Routes>
      <Route path= "/" element = {<Home/>}></Route>
      <Route path= "/about" element = {<AbooutMe/>}></Route>
    </Routes>
  </HashRouter>

}

export default App
