import React from 'react'
import { useState , useEffect} from 'react';

// const Test = () => {

// }
import './Test.scss'
const Test1 =() =>{
    const [toggle, set] = useState(false);
    const clickme = () =>{
        set(!toggle);
    }
    const Hien = () => {
        return <h1>ALO DA HIEN</h1>
    }
    console.log("willmount")
    useEffect(()=>{
        // Hien();
        console.log("aftermount")
        return ()=>{
            console.log("In ra1")
        }
    }, [])
    useEffect(() => {
        // Hien();
        console.log("aftermount2");
    })
    // console.log(toggle);
    return (

        <div>
            <button onClick={()=>clickme()}>Clickme</button>
            {
                toggle ? <Hien></Hien> : "Text"
            }
            <button>
                istrue
            </button>
        </div>
    )

}
export default Test1;