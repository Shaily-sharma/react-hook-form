import React,{useRef} from "react";
import Child from "./Child";

const Parent = () => {
  const ref=useRef();
  return (
    <div>
      <Child ref={ref}/>
      <div>parent</div>
      <button onClick={()=> ref.current.hi()}>click parent</button>
    </div>
  );
};

export default Parent;