import './App.css';
import Webcam from 'react-webcam';

function App() {
  return (
    <div className="App">
        <p>Hello World</p>     
        <Webcam
            mirrored={true}
        />
    </div>
  );
}

export default App;
