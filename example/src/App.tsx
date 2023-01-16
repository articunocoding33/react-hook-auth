import { useSignIn } from 'react-hook-auth';
import reactLogo from './assets/react.svg';
import './App.css';

const App = () => {
  useSignIn();

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Hook Auth</h1>
    </div>
  );
};

export default App;
