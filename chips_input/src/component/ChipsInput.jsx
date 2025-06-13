import React, { useState } from 'react'

const ChipsInput = () => {
    const [inputText, setInputText]= useState("")
    const [chips, setChips ]= useState([])

    const handleEnter=(e)=>{
        if(e.key =='Enter' && inputText.trim()!==""){
            setChips(prev=>[...prev, inputText])
            setInputText("")
        }
    }
    const handleClick=(idx)=>{
        const newArray = [...chips]
        newArray.splice(idx, 1)
        setChips([...newArray])
    }
    
  return (
    <>
    <h1>Chips Input</h1>
    <div>
        <input type="text" placeholder='enter keywords... ' value={inputText} onChange={(e)=>setInputText(e.target.value)} onKeyDown={(e)=>handleEnter(e)} style={{padding:"15px", border:"3px solid grey", borderRadius:"15px"}} />
    </div>
    <div style={{display:"flex", justifyContent:'center'}}>
        {chips.map((chip, idx)=>
            <div style={{background:"blue", color:"white", paddingLeft:"10px", borderRadius:"15px" , margin:"5px"}}>{chip} <button style={{background:"none", color:"white", marginRight:'5px'}} onClick={()=>handleClick(idx)}>X</button></div>
        )}
    </div>
    </>
  )
}

export default ChipsInput