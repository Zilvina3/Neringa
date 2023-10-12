import './App.css'
import AboutMe from './Components/AboutMe/AboutMe';
import Consultation from './Components/Consultation/Consultation';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import WrongPath from './Components/WrongPath/WrongPath';
import './index.css'
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <Routes>
      <Route path={'/'} element={<Layout><Home /></Layout>} />
      <Route path={'/contact'} element={<Layout><Contact /></Layout>} />
      <Route path={'/Apie'} element={<Layout><AboutMe /></Layout>} />
      <Route path={'/konsultacija'} element={<Layout><Consultation /></Layout>} />
      <Route path={'/home'} element={<Layout><Home /></Layout>} />
      <Route path={'*'} element={<Layout><WrongPath /></Layout>} />
    </Routes>
  )
}

export default App;
