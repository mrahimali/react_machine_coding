import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput]=useState("")
  const [task, setTask]=useState([])

  const handleAdd=()=>{
    if(input.trim() !== ""){
    setTask(prev=>[...prev, {id:task.length+1, todo:input, complete:false}])
    setInput("")
    }
  }

  const handleDelete=(idx)=>{
    setTask(
      task.filter(
        t=>t.id!==idx
      )
    )
  }

  const handleLine=(idx)=>{
    console.log(idx)
    setTask(task.map((t)=>{
      if (t.id===idx){
        return {
          ...t,complete:!t.complete
        }
      }else{
        return t;
      }
    }))
    console.log(task)
  }

  
  return (
    <>
      <input type="text" id="" placeholder='enter todo' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <div>
        {task.map((t, idx)=>(
          <li key={idx}>
            <input type="checkbox" checked={t.complete} onClick={()=>handleLine(t.id)}/>
            {/* <span className={t.complete?'line':""}>{t.todo}</span> */}
            <span>{t.complete?<del>{t.todo}</del>:t.todo}</span>
            <button onClick={()=>handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </div>
    </>
  )
}

export default App
