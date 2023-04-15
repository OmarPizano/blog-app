import { Home, PostForm, NotFound } from './pages'
import { Routes, Route } from 'react-router-dom'
import { PostProvider } from './context/PostContext'
import { Layout } from "./layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Layout>
      <PostProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/new' element={<PostForm/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Toaster />
      </PostProvider>
    </Layout>
  );
}

export default App;
