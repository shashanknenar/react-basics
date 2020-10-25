import React, { useState } from 'react'

function App() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  let message = ''
  if (name === 'admin' && password === 'admin') {
    message = 'Hello Admin'
  }
  else{
    message = 'Who are you?'
  }


  return (
    <div>
      <div>{name === 'admin' && password === 'admin' && 'Hello admin'}</div>
      <input type="username" value={name} onChange={updateTextField} />
      <input type="password" value={password} onChange={updatePasswordField} />

      <button onClick={submitForm}>Submit Form</button>
    </div>
  );

  function submitForm() {
    console.log(name, password);
  }
  function updateTextField(event) {
    setName(event.target.value)
  }
  function updatePasswordField(event) {
    setPassword(event.target.value)
  }

}

export default App;
