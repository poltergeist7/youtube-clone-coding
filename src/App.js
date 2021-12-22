import './App.css';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow' // fetch를 쓸 때, 리퀘스트를 쓸 때,
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBDyBbSMfvK2T0jpYuj9E_W1RS6NO5fcqc",
     requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  
  return (
    <VideoList videos={videos} />
  );
}

export default App;
