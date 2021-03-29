import React, {useState} from 'react'
// import Tasks from './Tasks'

const Todo = () => {
    const [tasks, setTasks] =useState( [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ])

    const isComplete = (mode) =>{
        if(mode === true){
            return 'Complete'
        }
        return 'Not complete'
    }

    const changeMode =(name) =>{
        let newTaskList = [...tasks]
        let someTask = newTaskList.filter(d =>{
            return d.name === name;
        })
        someTask[0].completed = !someTask[0].completed
        setTasks(newTaskList)
    }
     
    
    return (
        <div>
            {tasks.map((d, item) =>{
                return <div>
                    {d.name}
                    <input type="button" value={isComplete(d.completed)} onClick={() => changeMode(d.name)}/>
                </div>

            })}
        </div>
    )
}

export default Todo
