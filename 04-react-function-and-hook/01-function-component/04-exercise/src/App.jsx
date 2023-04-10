import React from 'react';

const App = () => {
    return (
        <div>
        <Header />
        <Form />
        <Result />
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <img src="..\04-exercise\exercise-problem\problem-1.png" alt="" />
        <h1>Table Example</h1>
        </div>
    )
}

const Form = () => {
    return (
        <div>
            <input type="text" placeholder='Type new name here'/>
            <input type="text" placeholder='Type new organization here'/>
            <input type="text" placeholder='Type new position here'/>
            <button>SAVE</button>
        </div>
    )
}

const Result = () => {
    return (
        <div>
            <table >
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Organization</b></td>
                    <td><b>Position</b></td>

                </tr>
                <tr>
                    <td>John</td>
                    <td>ABC Inc.</td>
                    <td>Developer</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>ABC Inc.</td>
                    <td>Developer</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>ABC Inc.</td>
                    <td>Developer</td>
                </tr>
            </table>

        </div>
    )
}



export default App;