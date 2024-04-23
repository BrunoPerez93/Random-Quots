import { Route, Routes } from "react-router-dom";
import LoginPage from '../../Pages/LoginPage';
import RegisterPage from '../../Pages/RegisterPage';
import QuotesPage from '../../Pages/QuotesPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/quotes" element={<QuotesPage />} />
    </Routes>
  )
}