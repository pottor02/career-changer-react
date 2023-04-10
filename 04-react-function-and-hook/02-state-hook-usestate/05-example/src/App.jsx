import { useState } from 'react'

const App = () => {
    const [counter, setCounter] = useState(50)
    
    return (
        <div>
            <h3>People is coming from the gate. Please count.</h3>
            <span>{counter}</span>
            &nbsp;
            <button onClick={
                () => setCounter(counter + 1)
            }
            >Count</button>
            
            <button onClick={
                () => setCounter(counter - 1)
            }
            >DecresCount</button>
        </div>
    )
}

export default App

