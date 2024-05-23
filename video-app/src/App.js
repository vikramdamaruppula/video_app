import React, {useState } from "react";
// import Captions from "./components/Captions";
import VideoPlayer from "./components/VideoPlayer";
import './App.css'

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleShowVideo = () => {
    setShowVideo(true);
  };


  return (
    <div className="app-container">
      <div className="input-container">
      <p> Enter A Video Link </p>
        <input
          type="text"
          value={videoUrl}
          onChange={handleVideoUrlChange}
          placeholder="Enter video URL"
          className="input-field"
        />
        <button onClick={handleShowVideo} className="show-video-button">
          See Video
        </button>
      </div>
      {showVideo && <VideoPlayer url={videoUrl} />}
    </div>
  );
}

export default App;
