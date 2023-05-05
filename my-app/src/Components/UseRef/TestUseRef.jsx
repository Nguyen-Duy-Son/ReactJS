
import React, { useRef ,useEffect, useLayoutEffect, useState } from "react"

const TestUseRef = () => {
    const [count,setCount] = useState([])
    // 
    const countRef = useRef();

  return (
    <div>
        
        {/* <p>Clicked {countRef.current}</p>
        <button className="" onClick={handleClick}>click</button> */}
        <input></input>
    </div>
  )
}

export default TestUseRef
