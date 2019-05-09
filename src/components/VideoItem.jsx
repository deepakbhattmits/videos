import React from 'react';
import '../assets/stylesheets/VideoItem.css';
const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div onClick={() =>  onVideoSelect(video)} className="video-item item">
        
        
                    
            <img className="ui image" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    <span>{video.snippet.title}</span>
                </div>
            </div>
        </div>
       
    );
}
export default VideoItem;