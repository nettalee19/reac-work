import React, { useState, useEffect, useRef } from 'react'
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';

function Image() {

    const imgRef = useRef()
    const img2Ref = useRef()
    const [pict, setPict] = useState(false)
    
    return (
        <div>
            {
                pict?
                <img src={pic1} ref={imgRef} width="420" height="500" alt="" onMouseLeave={() =>{setPict(false)}}/>:
                <img src={pic2} ref={img2Ref} width="420" height="500" alt="" onMouseLeave={() =>{setPict(true)}}/>


            }
        </div>
    )
}

export default Image
