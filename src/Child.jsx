import React ,{useImperativeHandle, forwardRef} from "react";


const Child = (props,ref) => {
useImperativeHandle(ref,()=>{
    return{
        hi:()=>sayHi(),
    }
})

  const sayHi = () => {
    console.log("Hi,Everyone");
  };
  return (
    <div>
      <div>Child component</div>
      
    </div>
  );
};

export default forwardRef(Child);
