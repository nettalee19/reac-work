import React, {useState} from 'react'

const Time=()=> {
    const [time, setTime] = useState(null)
    //    {unit: 60 , thisIs:'Seconds'},
    //    {unit: 1 , thisIs:'Minutes'} ,
    //    {unit: 0.16 , thisIs:'Hours'} ,
    

    const timeChange = (e) =>{
        if(e.target.name === "seconds"){//the first input is invoked
            console.log('hello')
            setTime(e.target.value)
        }
        else if(e.target.name === "minutes"){//the second input is invoked
            setTime(e.target.value*60)
        }
        else if(e.target.name === "hours"){//the third input is invoked
            setTime(e.target.value*3600)
        }
    }

    return (
        <div>
            <input name="seconds" value={time/1} type="text" onChange={timeChange}/>
            <input name="minutes" value={time/60} type="text" onChange={timeChange}/>
            <input name="hours" value={time/3600} type="text" onChange={timeChange}/>
        </div>
    )
}

export default Time
