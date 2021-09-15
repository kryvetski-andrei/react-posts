import React from "react";
import classes from "./PagesButton.module.css"

const PagesButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.pagesButton}>
      {children}
    </button>
  )
}

export default PagesButton;