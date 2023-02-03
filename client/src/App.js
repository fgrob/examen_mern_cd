import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import PetFormPage from './views/PetFormPage';


function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/create" element={<PetFormPage/>} />
        <Route path="/pet/:id" element={<Details/>} />
        <Route path="/pet/edit/:id" element={<Update/>} />
      </Routes>
    </div>
  )
}

export default App;
