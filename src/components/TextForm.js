import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, newText] = useState("")
    function handleUp(){
        //console.log("Upper Case Button was Clicked"+text)
        let newtext2=text.toUpperCase();
        newText(newtext2)
        props.showAlert("Text has been converted to Upper Case","success")
        
    }
    function handleLow(){
      //console.log("Upper Case Button was Clicked"+text)
      let newtext2=text.toLowerCase();
      newText(newtext2)
      props.showAlert("Text has been converted to Lower Case","success")
      
  }
    function handleOnChange(event){
      
       newText(event.target.value)
        
    }
    function clear(){
      newText("");
      props.showAlert("Text has been cleared","success")
    }
    function inverse(){
      let neword="";
      let l=text.length,i=0;
      for( i=0;i<l;i++){
        if((text.substring(i,i+1)).toLowerCase()===(text.substring(i,i+1)) ){
          neword+=(text.charAt(i)).toUpperCase();
        }
        else if((text.substring(i,i+1)).toUpperCase()===(text.substring(i,i+1))){
          neword+=(text.charAt(i)).toLowerCase();
        }
        else{
          neword+=text.charAt(i);
        }

      }
      newText(neword);
      props.showAlert("Text has been converted to Toggle Case","success")
    }
    //text="hello"
  return (
    <>
    
    <div className={`container text-${props.mode ==='dark'?'white':'black'}`}><form>
        
        < div className={`mb-3 `} >
          <label htmlFor="exampleInputEmail1 " className={`form-label text-${props.mode ==='dark'?'white':'black'}`}><h2>{props.heading}</h2></label>
          <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="3" placeholder='Enter text here' ></textarea>
          <button className="btn btn-primary  my-2 " type='button' onClick={handleUp} >Convert to UpperCase</button>
          <button className="btn btn-primary mx-4 my-1" type='button' onClick={handleLow} >Convert to LowerCase</button>
          <button className="btn btn-primary mx-4 my-1" type='button' onClick={clear} >Clear Text</button>
          <button className="btn btn-primary mx-4 my-1" type='button' onClick={inverse} >Convert to Inverse Case</button>
        </div>
        
        
      </form></div>
      <div className="container my2">
        <h2>Your text summary</h2>
        <p >{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Time needed to read these words is {Math.round((1/(125/60))*text.split(' ').length)} minutes</p>
        <p><h4>Preview </h4>{text}</p>
      </div>
      </>
    
  )
}
