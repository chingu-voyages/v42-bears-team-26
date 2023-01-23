import React from 'react';

export const App = () => {
  const req = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Health Hero frontend 🚀</h1>
      <button onClick={req}>Request</button>
    </div>
  )
}
