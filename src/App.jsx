import { Dashboard, Login, Error, PrivateRoute, AuthWrapper } from './pages';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <AuthWrapper>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AuthWrapper>
  );
};

export default App;
