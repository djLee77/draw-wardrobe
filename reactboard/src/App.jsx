import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TestPage from './pages/TestPage';
import Board from './pages/Board';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Routes>
      <Route path="/" element={<Route path="/" element={<MainPage />} />
      <Route path="/board" element={<Board />} />} />
      <Route path="/login" element={<LoginPage />} />
       <Route path="/signup" element={<SignUpPage />} />
       <Route path="/test" element={<TestPage />} />
      </Routes>
    </Routes>
  </BrowserRouter>
);

export default App;
