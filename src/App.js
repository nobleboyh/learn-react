import {useState, useContext, useRef} from 'react'
import Content from './Content';
import Video from './video/video';
import Button from './components/Button';
function App() {
  const [avatar, setAvatar] = useState(false);

  const videoRef = useRef()

  function handlePlay(){
    videoRef.current.play()
    videoRef.current.changeColor()
  }

  function handlePause(){
    videoRef.current.stop()
  }

  return (
    <div className="App">
      <Button onClick={()=>{setAvatar(prev=>!prev)}} primary>{!avatar?"Show":"Hide"}</Button>
      {avatar && <Content/>}
      <br></br>
      <Video ref={videoRef}></Video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
