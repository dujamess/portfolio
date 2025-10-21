import { useState,useEffect } from "react";
function Header () {
    const [count,setCount] = useState(0);
    useEffect(()=>console.log("new value of counter"),[count]);
    return (
        <div className="h-[46px] w-[747px] border-[0.5px] border-move1 rounded-[10px] flex justify-around pt-[4px]">
            <img className=" h-10 w-10" src="logo.gif" alt="logo"></img>
            <button className="font-inter  text-hlibi text-[12px]" onClick={()=>{
                setCount(count+1);
                console.log("count is : ",count)
            }}>Home</button>
            <button className="font-inter  text-hlibi text-[12px]">Projects</button>
            <button className="font-inter  text-hlibi text-[12px]">about-me</button>
        </div>
    )
}
export default Header;