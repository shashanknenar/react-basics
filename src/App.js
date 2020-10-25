import React, { useState } from 'react'

function GreetComponent(props) {
  console.log(props);
  return <div>
  <h1>Hello {props.name}</h1>
  {props.children}
  </div>
}

function App() {
  return (
    <GreetComponent name="Shashank" children="hey there">
    <p>Nenar</p>
    </GreetComponent>
  );
}

export default App;
