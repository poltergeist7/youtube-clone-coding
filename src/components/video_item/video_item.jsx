import React from 'react';
import styled from 'styled-components';

const VideoItem = ({video: {snippet}}) => {
    return (
        <ListItem>
            <Video>
                <img src={snippet.thumbnails.medium.url} alt="video thumbnails" />
                <div>
                    <Title>{snippet.title}</Title>
                    <Channel>{snippet.channelTitle}</Channel>
                </div>
            </Video>
        </ListItem>
    );
};

export default VideoItem;

const ListItem = styled.li`
    width: 50%;
    cursor: pointer;
    padding: 0.2rem;
`;

const Video = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightblue;
    box-shadow: 2px 2px 5px 0px rgba(191, 191, 191, 0.53);
    transition: transform 250ms ease-in;

    $:hover{
        transform: scale(1.02);
    }

    img {
        width: 40%;
        height: 100%;
    }
    
    div {
        margin-left: 0.2rem
        
    }
`;

const Title =styled.p`
    font-size: 0.8rem;
`;

const Channel = styled.p`
    font-size: 0.6rem;
`;