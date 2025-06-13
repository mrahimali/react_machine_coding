import React, { useEffect, useState } from 'react'

const Progress = ({progress}) => {
  const [tempProg, setTempProg] = useState(0);
  useEffect(()=>{
    setTimeout(()=>setTempProg(progress), 100)
  }, [progress])
  return (
    <div className='outer'>
        <div className='inner' style={{
          // width:`${progress}%`,
          transform:`translateX(${tempProg-100}%)`, 
          color: progress<4? 'black': 'white'}} role='progressbar' aria-valuemax='100' aria-valuemin='0' aria-valuenow={tempProg}>
            {tempProg}%
        </div>
    </div>
  )
}

export default Progress