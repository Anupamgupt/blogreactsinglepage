import React from 'react'
import './index.css'
import {Previousdata} from './Previousdata'
import Previouscard from './Previouscard'

const Previous = () => {
  
    const previouslist= Previousdata.map((data)=>{
        return <Previouscard key={data.id} image={data.img} title={data.title}
            desc={data.desc} buttontext={data.buttontext}/>
    })
    return(
        <>  
             <h1 className="prevrollout">
                    Previous Roll Outs--
            </h1>
            <div className="wrapper">
               
                {previouslist}
            </div>
            
        </>
        
    )
  
}

export default Previous