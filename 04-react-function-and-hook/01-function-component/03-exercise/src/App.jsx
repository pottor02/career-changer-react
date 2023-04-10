import React from 'react';

function App() {
    
    return (
      <div id="app">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="150px"/>
        <Info />
        <Social />
      </div>
    );
}


  function Info() {
    let name = 'KaToON.';
    let bio = 'I have a Pen.';
    return (
      <div id="info">
            <h1>{ name }</h1>
            <p>{ bio }</p>
      </div>
    );
  }

  function Social() {
    return (
      <div id="social">
            <a href="https://www.facebook.com/">Facebook</a>
            <br />
            <a href="https://www.twitter.com/">Twitter</a>
      </div>
    );
  }

  export default App;
