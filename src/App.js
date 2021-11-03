import React from 'react';
import './App.css';
import Navigation from './navigation';
import { AuthProvider } from './Auth';


function App() {

  return (
    <AuthProvider>
    <div className="App">
        <Navigation />
    </div>
    </AuthProvider>
  );
}

export default App;
