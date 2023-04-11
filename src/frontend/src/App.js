import { Home, PostForm, NotFound } from './pages'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/new' element={<PostForm/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
