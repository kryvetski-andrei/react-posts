import React from "react";
import classes from "../loader/Loader.module.css"

const Loader = () => {
  return (

      <div className = {classes.container}>
        <div className = {classes.square}></div>
        <div className = {classes.square}></div>
        <div className = {classes.square}></div>
        <div className = {classes.square}></div>
        <div className = {classes.square}></div>
      </div>
  )
}

export default Loader;