import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';


const App: React.FC = () => (
  <>
    <Navbar />
    <AppRoutes />
  </>
);

export default App;
