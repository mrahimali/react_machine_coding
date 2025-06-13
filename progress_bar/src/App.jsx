import './App.css'
import Progress from './component/Progress'

function App() {

  const arr=[3,70,30,23,45,90,80];
  return (
    <>
      <div className="conatiner">
        {arr.map((prog, idx)=>(
        <Progress progress={prog} key={idx}/>
      ))}
      </div>
      
    </>
  )
}

export default App
