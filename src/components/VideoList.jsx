import React from 'react';
import VideoItem from './VideoItem';

// class VideoList extends React.Component{
//     render(props){
//         console.log('test:', props);
//         return (
//             <div>VideoList</div>
//         );
//     }
// } 
const VideoList = ({ videos, onVideoSelect }) => {
     // console.log('from video list page : ',props.videos);
    const renderedList = videos.map( (video) => {
       // console.log("seperate : ",video.id.videoId);
       return <VideoItem onVideoSelect= {onVideoSelect} id={video.id.videoId} key={video.id.videoId} video={video}/>
    });
    return (
        <div className="ui relaxed divided list ">
          Resulted Videos {videos.length} found.
           {renderedList}
        </div>
    );
}
export default VideoList;