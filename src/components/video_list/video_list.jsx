import React from 'react';
import VideoItem from '../video_item/video_item';
import styled from 'styled-components';

const VideoList = (props) => {
    return (
        <VideosUl>
            {props.videos.map(video => 
                (<VideoItem key={video.id} video={video} />
            ))}
        </VideosUl>
    );
};

export default VideoList;

const VideosUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
`;