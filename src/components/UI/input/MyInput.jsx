import React from "react";
import classes from "../input/MyInput.module.css"

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input className = {classes.myInput} ref={ref} {...props}/>
  )
})

export default MyInput;