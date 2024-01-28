import React, { useState } from 'react'

export default function About(props) {
 
 
  let butStyle={ color:props.mode=='dark'?"white":"black",
  backgroundColor:props.mode=='dark'?"grey":"white",
  border:"2px solid",
  borderColor:props.mode=='dark'?"white":"black",


  }
  /*function toggleStyle(){
    if(style.backgroundColor==="black"){
      myStyle({
        color:"black",
        backgroundColor:"white"
        
      });
      
      newbtnco("Use dark mode")
    }
    else{
      myStyle({
        color:"green",
        backgroundColor:"black",
        border:'2px solid white'
        
      })
      newbtnco("Use light mode")
    }
  }*/
  
  return (
  <div className="container my-5" > 
    <div className="accordion" id="accordionExample"  >
      <h1>About my Website</h1>
      <div className="accordion-item" style={butStyle}>
      <h2 className="accordion-header ">
        <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Free To Use
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is a free to use website</strong>
        </div>
      </div>
    </div>
    <div className="accordion-item" style={butStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Browser-Compatible
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This app is compatible to many browsers</strong>
        </div>
      </div>
    </div>
    <div className="accordion-item" style={butStyle} >
      <h2 className="accordion-header" >
        <button className="accordion-button collapsed"  type="button"   data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Very Simple To Use
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This app is very Simple To Use</strong> 
      </div>
      </div>
    
      
     
    </div>
  </div></div>
 
  
  )
}
