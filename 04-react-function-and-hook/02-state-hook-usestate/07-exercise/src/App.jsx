import React, { useState } from 'react';

function App() {
    // adding state here.
    // [stateVariable, stateMethod] = useState(init)
    const [choices, setChoices] = useState()

  const handleClickFullname = () => {
    // code here.
    setChoices('Fullname')
  };

  return (
    <div>
      <button onClick={handleClickFullname}>Fullname</button>
      <button onClick={() => setChoicesn('Age')}>Age</button>
      <button onClick={() => setChoices('Pictures')}>Picture</button>
      <DisplayInfo />
    </div>
image.png
    
  );
}

function DisplayInfo(props) {

  let showChoices;
  if (choices === 'Fullname') {
    showChoices = <h2>John Doe</h2>;
  } else if (choices === 'Age') {
    showChoices = <h2>30</h2>;
  } else if (choices === 'Picture') {
    showChoices = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    showChoices = <p>Please select an option.</p>;
  }

  return (
    <div>
      { showChoices }
    </div>
  );
}

export default App;
