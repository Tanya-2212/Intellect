import { Slider } from 'antd'
import React, { useState } from 'react'

export default function Widget1() {
    const [count,setCount]= useState(5)
    const [percentValue,setPercentValue]=useState(50)
    const handleProgress=(val)=>{
        setCount(val)
        setPercentValue(val*10)
    }
  return (
    <div className='container'>
        <div className='widget1'>
            <div className='progress-bar' style={{background:`radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(#ffffff ${percentValue}% , transparent 0)`}}>
                <div className='bar-inner'></div>
            </div>
            <div className='outerbox'>
                <div className='counterbox'>
                    <h5><strong>{count}</strong></h5>
                </div>
            </div>
        </div>
        <div className='slider-container'>
            <div className='slider-box'>
                <Slider trackStyle={{height:8,borderRadius:50,background:"#6fdae7"}} railStyle={{background:"rgba(255,255,255,0.4)",height:8,borderRadius:50,overflow:"hidden"}} 
                min={1} max={10} value={count} onChange={(val)=>handleProgress(val)}/>
            </div>
        </div>
        
    </div>
  )
}
