// import React from "react";
// import { useRef, useEffect } from "react";
// import { useState } from "react";
// const Todoapp = () => {
//     const [job, setJob] = useState("");
//     const [jobs, setJobs] = useState([]);

//     const handleSubmit = () => {
//         if (job.trim() === "") {
//             return;
//         }
//         setJobs((prev) => [...prev, job]);
//         setJob("");
//     };
//     const handleDelete = (index) => {
//         setJobs((prev) => prev.filter((item, id) => id !== index));
//         setJob("");
//     };
//     const handleUpdate = (index) => {
//       setJobs((prev) => {
//         jobs[index] = 
//       });
//       setJob("");
//     };
//     return (
//         <div>
//             <div>
//                 <input value={job} onChange={(e) => setJob(e.target.value)} />
//                 <button type="submit" onClick={handleSubmit}>
//                     Add to do
//                 </button>
//             </div>
//             <ul>
//                 {jobs.map((item, index) => (
//                     <li key={index}>
//                         {item}
//                         <button onClick={() => handleDelete(index)}>
//                             <div class="icons flex">
//                                 <svg
//                                     stroke="currentColor"
//                                     fill="currentColor"
//                                     stroke-width="0"
//                                     viewBox="0 0 1024 1024"
//                                     class="delete-icon"
//                                     height="1em"
//                                     width="1em"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
//                                 </svg>
//                                 <svg
//                                     stroke="currentColor"
//                                     fill="currentColor"
//                                     stroke-width="0"
//                                     viewBox="0 0 1024 1024"
//                                     class="edit-icon"
//                                     height="1em"
//                                     width="1em"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path>
//                                 </svg>
//                             </div>
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todoapp