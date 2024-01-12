import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TestPage from './pages/TestPage';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
