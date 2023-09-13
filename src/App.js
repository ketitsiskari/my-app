import React from 'react';
import './App.css';

function App() {
  const titleElement = React.createElement(
    'h1',
    { style: { color: '#999', fontSize: '19px' } },
    'Solar system planets'
  );

  const planetsList = (
    <ul className="planets-list">
      <li>Mercury</li>
      <li>Venus</li>
      <li>Earth</li>
      <li>Mars</li>
      <li>Jupiter</li>
      <li>Saturn</li>
      <li>Uranus</li>
      <li>Neptune</li>
    </ul>
  );

  return (
    <div className="App">
      {titleElement}
      {planetsList}
    </div>
  );
}

export default App;
