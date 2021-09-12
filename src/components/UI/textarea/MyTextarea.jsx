import React from "react";
import classes from "../textarea/MyTextarea.module.css"

const MyTextarea = React.forwardRef((props, ref) => {
  return (
    <textarea className = {classes.myTextarea} ref={ref} {...props}/>
  )
})

export default MyTextarea;