import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    getList()
  }, []);
  function getList() {
    fetch("http://localhost:4000/todo").then((result) => {
      result.json().then((resp) => {
        setUser(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setMobile(resp[0].mobile)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        getList()
      })
    })
  }

  function selectUser(id) {
    console.warn(users[id - 1]);
    let item = users[id - 1];
    setName(item.name)
    setEmail(item.email)
    setMobile(item.mobile)
    setUserId(item.id)

  }

  function updateUser(){
    let item = {name, email, mobile, userId}
    fetch(`http://localhost:4000/todo/${userId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getList()
      })
    })
  }
  return (
    <div >
      <h1>Get Users API Call</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Action</td>
          </tr>
          {
            users.map((item, i) =>

              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td><button onClick={() => { deleteUser(item.id) }}>Delete</button>
                  <Link onClick={() => { selectUser(item.id) }}><button>Update</button></Link>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div><br /><br />
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
        <input type='text' value={mobile} onChange={(e)=>setMobile(e.target.value)}/><br /><br />
        <button onClick={() => { updateUser()}}>Update User</button>
      </div>
    </div>
  );

}

export default Users;
