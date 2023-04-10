import React, { useEffect, useLayoutEffect, useState } from 'react'

const Test = () => {
    const [post, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => res.json())
    //         .then((posts) => {
    //             setPosts(posts);
    //             console.log(post);
    //         })
    // },[])
    useEffect(()=>{
        if(count > 3){
            setCount(0);
        }           
    },[count])
    const handleCount = () =>{
        
        setCount(count+1);
        console.log(count);
    }
    return (
        <div>
            {/* {
                post&&post.map((postIT,index)=>{
                    return <div key={postIT.id}>
                        <h1>{postIT.title}</h1>
                    </div>
                })
            } */}
            <div>
                <p>{count}</p>
                <button onClick={handleCount}>Click</button>
            </div>
        </div>
    )
}

export default Test