import { Home, NotFound, NewUser } from './pages'
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
          <Route path='/new' element={<NewUser/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Toaster />
      </PostProvider>
    </Layout>
  );
}

export default App;
