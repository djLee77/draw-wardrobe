import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Board from './pages/Board';
import SaveTest from './pages/SaveTest';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/board" element={<Board />} />
      <Route path="/save" element={<SaveTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
