import React from 'react'
import './index.css'

const Previouscard = (props) => {
  return (
        <div className="prevcontainer">
            <div className="imgcontain">
                <img className="fluttimg" src={props.image}/>
                <div className="wrap">
                    <h1 className="prevtitle">
                        {props.title}
                    </h1>
                    <h3 className="prevsub">
                        {props.desc}
                    </h3>
                    <button className="btn">{props.buttontext}</button>
                </div>
               
            </div>
            
        </div>
  )
}

export default Previouscard