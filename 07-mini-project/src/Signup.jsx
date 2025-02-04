import Layout from "./Layout"
import { Context } from "./UserContext"
import { useContext } from "react"
import { useState } from "react"

const Signup = () => {
    // You have to pass data to signup() function to successful registration.
    const { signup } = useContext(Context)
    // example of signup with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    //     fullname: 'mock',
    //     organization: 'mock'
    // })}>Text</button>

    const [ username , setUsername] = useState()
    const [ password , setPassword] = useState()
    const [ fullname , setFullname] = useState()
    const [ organization , setOrganization] = useState()

    return (
        <Layout>
            <div>
                <p>Username</p>
                <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Username"/>
                <br /><br />

                <p>Password</p>
                <input onChange={(event) => setPassword(event.target.value)}  type="text" placeholder="Password"/>
                <br /><br />

                <p>Fullname</p>
                <input onChange={(event) => setFullname(event.target.value)}  type="text" placeholder="Fullname"/>
                <br /><br />

                <p>Organization</p>
                <input onChange={(event) => setOrganization(event.target.value)}  type="text" placeholder="Organization"/>
                <br /><br />

                <button onClick={() => signup({
                    username: username,
                    password: password,
                    fullname: fullname,
                    organization: organization
                })}>SAVE</button>

            </div>
        </Layout>
    )
}

export default Signup