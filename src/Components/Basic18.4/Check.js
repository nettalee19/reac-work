import React, {useState} from 'react'


const Check = () => {
    const [num, setNum] = useState(["one", "two", "three", "four", "five"]);

    const onChecked = () =>{
        console.log("hi")
        
    }

    const deleteNum = () =>{
        
    }

    const resetAll = () =>{

    }

    return (
        <div>
            <div>
                <input type="button" value="delete" onClick={() =>{deleteNum()}}/>
                <input type="button" value="reset" onClick={() =>{resetAll()}}/>
            </div>
            <div>
                {num.map(n =>{
                    return <div>
                        <input type="checkbox" value={n} onChange={() => {onChecked()}}/> {n}
                        </div>
                })}

            </div>
        </div>
    )
}

export default Check
