import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from "react"


const Login = () => {
    // You have to pass data to signup() function to successful login.
    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>
    const [username , setUsername] = useState()
    const [password , setPassword] = useState()


    return (
        <Layout>
            <div><center>
                <p>Username</p>
                <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Username"/>
                <br /><br />

                <p>Password</p>
                <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password"/>
                <br /><br /><br />

                <button onClick={() => login({ username: username, password: password })}>Login</button>
            </center></div>
        </Layout>
    )
}

export default Login