import React, { useState } from 'react';

function App() {
    // adding state here.
    // [stateVariable, stateMethod] = useState(init)
    const [choices, setChoices] = useState()

  const handleClick = (value) => {
    // code here.
    setChoices(value)
  };

  return (
    <div>
      <button onClick={() => setChoices('Fullname')}>Fullname</button>
      <button onClick={() => setChoices('Age')}>Age</button>
      <button onClick={() => setChoices('Picture')}>Picture</button>
      <DisplayInfo choices={choices}/>
    </div>
  );
}

function DisplayInfo(props) {

  let showChoices;
  if (props.choices === 'Fullname') {
    showChoices = <h2>John Doe</h2>;
  } else if (props.choices === 'Age') {
    showChoices = <h2>30</h2>;
  } else if (props.choices === 'Picture') {
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
