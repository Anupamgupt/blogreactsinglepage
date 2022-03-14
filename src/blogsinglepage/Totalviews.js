import React from 'react'
import classes from './blogpage.module.css'


const Totalviews = () => {
  return (
    <div className={classes.totalcontainer}>
        <div className={classes.totalviews}>
            <h1 className={classes.total}>
                Total Views -
            </h1>
            <span>1.13k </span>
        </div>
    </div>
  )
}

export default Totalviews