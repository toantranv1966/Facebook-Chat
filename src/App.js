import logo from './logo.svg';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MessengerCustomerChat
        pageId="<1444607315772142>"
        appId="<233106164568098>"
        htmlRef="<REF_STRING>"
      />
      ,
    </div>
  );
}

export default App;
