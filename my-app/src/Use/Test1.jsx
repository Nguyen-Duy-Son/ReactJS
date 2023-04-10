import React, { useEffect, useLayoutEffect, useState } from 'react'
import './Test1.scss'
const Test1 = () => {
    const [post, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
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
    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=2&limit=8&fbclid=IwAR2qLsy3BAXYZRqMqOZKKVOMdmjxUZjglVu7pvYCneVE71R6GXdd8f4cu-c")
        .then(res=>res.json())
        .then(posts=>{
            setPosts(posts);
        })
        .catch(err=>{
            console.log(err)
        })
    }, [count])
    const handleCount=()=>{
        setCount1(count1+1);
    }
    const handleClick = () => {
        handleCount();
        console.log(count1);
        fetch(`https://picsum.photos/v2/list?page=${count1}&limit=8&fbclid=IwAR2qLsy3BAXYZRqMqOZKKVOMdmjxUZjglVu7pvYCneVE71R6GXdd8f4cu-c`)
            .then(res => res.json())
            .then(posts => {
                setPosts(pre=>([...pre,...posts]));
            })
            .catch(err => {
                console.log(err)
            })
        // console.log(count);
        
    }
    return (
        <div className='container'>
            <div className='box'>
                {
                    post && post.map((postIT, index) => {
                        return <div id={postIT.id} className='box_img'>
                            <img src={postIT.download_url}></img>
                        </div>
                    })
                }
            </div>
            <div>
                <button className='container_button' onClick={handleClick}>Click</button></div>
            
        </div>
    )
}

export default Test1