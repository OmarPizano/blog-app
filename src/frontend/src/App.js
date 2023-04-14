import { Home, PostForm, NotFound } from './pages'
import { Routes, Route } from 'react-router-dom'
import { PostProvider } from './context/PostContext'
import { Layout } from "./layout";

function App() {
  return (
    <Layout>
      <PostProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/new' element={<PostForm/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </PostProvider>
    </Layout>
  );
}

export default App;
