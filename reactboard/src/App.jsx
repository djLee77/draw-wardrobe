import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Board from './pages/Board';
import SaveTest from './pages/SaveTest';
import NavigationBar from './components/NavigationBar';
import PostPage from './pages/PostPage';

const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/board" element={<Board />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/save" element={<SaveTest />} />
      <Route path="/post" element={<PostPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
