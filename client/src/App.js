
import './App.css';
import Header from './Header';
import Layout from './Layout';
import Post from './Post';
import {Routes,Route} from "react-router-dom"
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContext, UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPage from './pages/EditPage';
function App() {
  return (

<UserContextProvider>
<Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={ <IndexPage/> }/>
   <Route path='/login' element={<LoginPage/>}/>
   <Route path='/register' element={<RegisterPage/>}></Route>
   <Route path='/create' element={<CreatePost/>}></Route>
   <Route path='/post/:id' element={<PostPage/>}></Route>
   <Route path='/edit/:id' element={<EditPage/>}></Route>
      </Route>
    </Routes>
</UserContextProvider>
    
   

    
  
  );
}

export default App;
