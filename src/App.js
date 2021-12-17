import './App.css';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {

  }, []);

  
  return (
    <VideoList videos={videos} />
  );
}

export default App;
