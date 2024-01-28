import React from 'react'

function Alert(props) {
  const capitalize= (word)=>{
    let wordo=word.toLowerCase();
    return wordo.charAt(0).toUpperCase()+wordo.slice(1);
  }
  
  return (<>
    <div className="alert" style={{height:'60px'}}>
       {props.alert && 
  <div>
  <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{capitalize(props.alert.type)}! </strong>{props.alert.message}

</div> 
 </div>}
    </div>
 </>)

  
}

export default Alert

