import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

function App() {
const [sessionToken, setSessionToken] = useState("undefined");

  return (
    <div className="App">
      {/* <h1>This is a test</h1>
      {sessionToken} */}
      <Navbar />
      <Auth />
      <Pies />
    </div>
  );
}

export default App;
