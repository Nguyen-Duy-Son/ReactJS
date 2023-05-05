import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'

import './Test1.scss'
const Test1 = () => {
    // const [post, setPosts] = useState([]);
    // const [count, setCount] = useState(0);
    // const [count1, setCount1] = useState(0);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => res.json())
    //         .then((posts) => {
    //             setPosts(posts);
    //             console.log(post);
    //         })
    // },[])
    
    // useLayoutEffect(() => {
    //     if (count > 3) {
    //         setCount(0);
    //     }
    // }, [count])
    // useEffect(() => {
    //     fetch("https://picsum.photos/v2/list?page=2&limit=8&fbclid=IwAR2qLsy3BAXYZRqMqOZKKVOMdmjxUZjglVu7pvYCneVE71R6GXdd8f4cu-c")
    //     .then(res=>res.json())
    //     .then(posts=>{
    //         setPosts(posts);
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }, [count])
    // const handleCount=()=>{
    //     setCount1(count1+1);
    // }
    // const handleClick = () => {
    //     handleCount();
    //     console.log(count1);
    //     fetch(`https://picsum.photos/v2/list?page=${count1}&limit=8&fbclid=IwAR2qLsy3BAXYZRqMqOZKKVOMdmjxUZjglVu7pvYCneVE71R6GXdd8f4cu-c`)
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(pre=>([...pre,...posts]));
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     // console.log(count);   
    // }
    const [users,setUser] = useState([])
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                console.log(res.data);
                setUser(res.data);
            })
            .catch(err=>{
                console.log("error");
            })
    },[])
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log("error");
        });
    }, []);
    useEffect(()=>{
        axios
          .post("/user", {
            firstName: "Fred",
            lastName: "Flintstone",
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    })
    return (
        <div className='container'>
             <div className='box'>
                {
                    users && users.map((userIT, index) => {
                        return (
                          <div id={userIT.id} className="box_img">
                            <div>{userIT.id}</div>
                          </div>
                        );
                    })
                }
            </div> 
            
        </div>
    )
}

export default Test1