import React , { useState, useEffect, useRef } from 'react'
import video from './video.mp4'

export default function Video() {
    const videoRef = useRef(null)

    const playV = () =>{
        videoRef.current.play()
    } 
    const pauseV = () =>{
        videoRef.current.pause()
    } 

    return (
        <div>
            <input type="button" value="play" onClick={playV}/>
            <input type="button" value="pause" onClick={pauseV}/>
            <video ref={videoRef} width="1000" height="800" controls>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}


