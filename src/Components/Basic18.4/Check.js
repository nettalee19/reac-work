import React, {useState} from 'react'

const num = ["one", "two", "three", "four", "five"];

const Check = () => {
    // const copyNums = num.map(n =>({
    //     name: n, 
    //     isChecked: false,
    // }))
    const [List, setList] = useState(num);
    const [isChecked, setIsChecked] = useState([]);

    const onChecked = (e) =>{
        // console.log("hi", index)
        let check = isChecked;
        let i = check.indexOf(e.target.value)
    
        i === -1 ? check.push(e.target.value) : check.splice(i, 1)

        setIsChecked(check)
    }

    const deleteNum = () =>{
        let newList = [...List]
        let filtered = isChecked
        let requested = newList.filter(i => {
            return filtered.indexOf(i) === -1
        }    
        )
        setList(requested)
    }

    const resetAll = () =>{
        console.log("reset")
        setList(num)
        setIsChecked([])
    }

    return (
        <div>
            <div>
                <input type="button" value="delete" onClick={deleteNum}/>
                <input type="button" value="reset" onClick={resetAll}/>
            </div>
            <div>
                {List.map((n, index) =>{
                    return <div>
                        <input type="checkbox" value={n} onChange={(index) => onChecked(index)}/> {n}
                        </div>
                })}
                {/* {num.map(n =>{
                    return <div>
                        <input type="checkbox" value={n} onChange={() => {onChecked()}}/> {n}
                        </div>
                })} */}

            </div>
        </div>
    )
}

export default Check
