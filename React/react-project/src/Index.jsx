import React from 'react';
import ReactDOM from 'react-dom/client'; // modern way (React 18+)

// Component 1
export default function Index1() {
  return (
    <div>
      <h1>Heading 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, expedita!</p>
      <ul>
        <li>list items</li>
        <li>list items</li>
        <li>list items</li>
        <li>list items</li>
      </ul>
      <div className="myDiv">
        <h1>Add a class to this div</h1>
      </div>
    </div>
  );
}

// Component 2
function MyComponent() {
  return (
    <div>
      <h1>This is a simple component that returns an h1 tag</h1>
    </div>
  );
}


ReactDOM.render(<MyComponent />, document.getElementById("root"));

