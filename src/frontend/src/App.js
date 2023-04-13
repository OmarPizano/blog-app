import { Home, PostForm, NotFound } from './pages'
import {Routes, Route} from 'react-router-dom'
import { PostProvider } from './context/PostContext'

function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='container p-10 bg-neutral-500 m-auto'>
        <PostProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/new' element={<PostForm/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
