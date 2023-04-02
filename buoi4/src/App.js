import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Features from './Components/Features';
import Table from './Components/Table';
import { useState } from 'react';
// const Main = Styled.div`
//     color: red;
// `
// const Main1 = Styled.div`
//     color: yellow;
// `
import Selection from './Components/Selection';
import Test from './Test1';
function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  // console.log(job);
  const handleSubmit = () => {
    setJobs(pre => [...pre, job]);
  }
  return (
    <div className="App">
      {/* <Student></Student>
      <Teacher></Teacher> */}

      <Header></Header>
      <Features></Features>
      <Table></Table>
      {/* <input type="text" value={job} onChange={e => { setJob(e.target.value) }}>
      </input>
      <button onClick={handleSubmit}>
        Submit
      </button>
      <ul>
        {jobs.map((job, index) => {
          <li key={index}>{job}</li>
        })}
      </ul> */}
      <Selection></Selection>
    </div>
  );
}

export default App;
