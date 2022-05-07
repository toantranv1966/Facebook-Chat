import React, { useState, useEffect } from 'react';
import './App.css';
import { css } from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './App.css';
import Header from './components/Header.jsx';
import SliderHome from './SliderHome';
import Pages from './pages/Pages';

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={'#3d2514'}
          loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <>
          <Pages />
          {/* <SliderHome /> */}
          {/* <Header /> */}
        </>
      )}
    </div>
  );
}

export default App;
