import { HomePage, NotFoundPage, PostFormPage } from './pages'
import { Routes, Route } from 'react-router-dom'
import { PostProvider } from './context/PostContext'
import { Layout } from "./layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Layout>
      <PostProvider>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/new' element={<PostFormPage title="New Post"/>}/>
          <Route path='/edit/:id' element={<PostFormPage title="Edit Post"/>}/>
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
        <Toaster />
      </PostProvider>
    </Layout>
  );
}

export default App;
