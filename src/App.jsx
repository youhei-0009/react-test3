import { useState, useCallback, useMemo } from 'react';
import './style.css';
import { ChildArea } from './ChildArea';

export default function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const tmp = useMemo(() => 3+3, []);

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText}/>
        <br />
        <br />
        <button onClick={onClickOpen}>display</button>
        <ChildArea open={open} onClickClose={onClickClose}/>
      </div>
    </>
  );
}
