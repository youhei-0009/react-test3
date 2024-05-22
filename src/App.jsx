import { useState } from 'react';
import './style.css';
import { ChilArea } from './ChildArea';

export default function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="App">
        <input />
        <br />
        <br />
        <button>display</button>
        <ChilArea />
      </div>
    </>
  );
}
