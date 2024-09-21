import { useState } from "react";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    function saveUser() {
        // console.warn(name,email,mobile);
        let data = { name, email, mobile }
        fetch("http://localhost:4000/todo", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn("resp", resp)
            })
        })
    }
    return (
        <div>
            <h1>User SignUp</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" /><br /><br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" /><br /><br />
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} name="mobile" /><br /><br />
            <button type="button" onClick={() => { saveUser() }}>Save New User</button>
        </div>
    )
}

export default SignUp;