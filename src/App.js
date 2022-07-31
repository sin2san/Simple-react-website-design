import { useState, useContext, useEffect } from 'react';
import './App.css';
import Root from './component';
import { AuthContext } from './Contexts/AuthContext';
import { AlertContext } from './Contexts/AlertContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [variant, setVariant] = useState('');
  const [message, setMessage] = useState('');

  const { defaultEmail, defaultPassword } = useContext(AuthContext);

  // Set email in state when page reloads
  useEffect(() => {
    const emailAddress = localStorage.getItem('email');
    if (emailAddress) {
      setEmail(emailAddress);
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          email,
          setEmail,
          password,
          setPassword,
          defaultEmail,
          defaultPassword,
        }}>
        <AlertContext.Provider value={{
          isActive,
          setIsActive,
          variant,
          setVariant,
          message,
          setMessage
        }}>
          <Root />
        </AlertContext.Provider>
      </AuthContext.Provider>
    </div >
  );
}

export default App;
