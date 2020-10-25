import React, { Component } from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = ({movieList}) => {
    console.log('---------------')
    console.log(movieList)
    console.log('---------------')

    // const movies=['1','2','3','4','5'];
    return (
        <ul>
            {movieList.map((movie) => {
                    return <VideoListItem key={movie.id} movie={movie}/>
                    
                })}
            
        </ul>
    )
}

export default VideoList;