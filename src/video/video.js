import React from 'react'
import video1 from './download.mp4'
import { forwardRef, useImperativeHandle, useRef} from 'react'

const Video = (props, test) => {
    const videoRef = useRef()
    console.log(video1);
    useImperativeHandle(test,()=>({
        stop(){
            videoRef.current.pause();
        },
        play(){
            videoRef.current.play();
        },
        changeColor(){
            document.getElementById("tiktok").style = "color:red"
        }
    }))
    return (
        <>
            <h1 id="tiktok">Tiktok</h1>
            <video height={400} src={video1} ref={videoRef}/>
        </>
    )
}

export default forwardRef(Video)