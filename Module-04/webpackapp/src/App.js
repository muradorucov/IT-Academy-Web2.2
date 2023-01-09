import React, { useState, useEffect } from 'react'
function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("side effect", number);

    return () => {
      console.log("clean up", number);
    };
  },[number])

  const onClick = () => { setNumber(Math.random()) }

  return (
    <button type="button" onClick={onClick}>
      Clicke et
    </button>
  );
}

export default App;



