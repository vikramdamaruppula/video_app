import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import "../App.css"
const VideoPlayer = ({url}) => {
  const [captions, setCaptions] = useState([]);
  const [newCaption, setNewCaption] = useState('');
  const [timestamp, setTimestamp] = useState(0);
  const [currentPlayingTime, setCurrentPlayingTime] = useState(0);

  const addCaption=()=>{
    if (newCaption.trim() && timestamp > 0) {
      setCaptions([...captions, { text: newCaption, time: timestamp }]);
      setNewCaption(''); 
      setTimestamp(0);
    } else {
      alert('Please enter a caption and a valid timestamp (greater than 0).');
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlayingTime((prevTime) => prevTime + 1); 
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const displayCaptions = () => {
    return captions.map((caption) => (
      <span key={caption.text} className={currentPlayingTime > caption.time ? 'subtitle' : 'disappeared'}>
        {caption.text}
      </span>
    ));

  };
  return (
    <div style={{marginTop:'15px'}}>
      <div className='caption-container'>
      <ReactPlayer url={url} controls />
      <div className='subtitle-container'>
         {displayCaptions()} 
      </div>
      </div>
      <div style={{marginTop:'10px'}}>
      <textarea 
        className="input-field"
        onChange={(e) => setNewCaption(e.target.value)}
        value={newCaption}
        placeholder="Enter captions" 
        rows="5" 
        cols="50" 
      />
      <br/>
      <input
        style={{width:'40px'}} 
        className="input-field"
        type="number"    
        onChange={(e)=>setTimestamp(e.target.value)}
        value={timestamp}
        placeholder="Enter timestamp (in seconds)" 
      />
      <button onClick={addCaption}>Add Caption</button><br/>
      </div>
    </div>
  )
}

export default VideoPlayer