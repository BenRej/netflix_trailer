import React, { Component } from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = () => {
    const movies = ['film1','film2','film3','film4','film5']
    return (
        <ul>
            {
                movies.map((movie => {
                    return <VideoListItem movie = {movie}/>
                    
                }))
            }
            
        </ul>
    )
}

export default VideoList;