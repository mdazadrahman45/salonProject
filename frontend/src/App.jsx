import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      {/* Yahan se koi width restriction nahi hai */}
      <div className="font-sans antialiased bg-gray-50 min-h-screen">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;