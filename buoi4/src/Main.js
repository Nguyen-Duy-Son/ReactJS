import React, { useState } from 'react'

const Main = () => {
    const [job, setJob] = useState("");
    const [jobs,setJobs] = useState([]);
    // console.log(job);
    const handleSubmit=()=>{
        setJobs(pre=>[...pre,job]);
    }
  return (
    <div>
        <input type="text" value={job} onChange={e=>{setJob(e.target.value)}}>
        </input>
        <button onClick={handleSubmit}>
            Submit
        </button>
        <ul>
            {jobs.map((job,index)=>{
                <li key={index}>{job}</li>
            })}
        </ul>
    </div>
  )
}

export default Main