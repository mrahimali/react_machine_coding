import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const clickRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log('Clicked:', event.target);

      if (clickRef.current && !clickRef.current.contains(event.target)) {
        console.log('Outside modal clicked!');
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button onClick={() => setShow(true)}>Show</button>

      <div className="container">
        <p>Background Content</p>

        {show && (
          <div ref={clickRef} className="modal">
            <h1>Modal</h1>
            <p>This is a modal. Click outside to close it.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
