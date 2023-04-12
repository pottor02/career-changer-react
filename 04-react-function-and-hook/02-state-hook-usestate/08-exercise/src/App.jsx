import React from 'react';
import {useState} from 'react';


function App() {
    const [showname, setName] = useState()
    const [showbio, setBio] = useState()


    return (
      <div id="app">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="150px"/>
        <br />
        <input type="text" value={showname} onChange={(event) => {setName(event.target.value) }} placeholder='Name Here'/>

        <input type="text" value={showbio} onChange={(event) => {setBio(event.target.value) }} placeholder='Bio Here'/>


        <Info showname={showname} showbio={showbio}/>
        <Social />
      </div>
    );
}


  function Info(props) {
    // let name = 'KaToON.';
    // let bio = 'I have a Pen.';



    return (
      <div id="info">

            <h1>{ props.showname }</h1>
            <p>{ props.showbio }</p>
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
