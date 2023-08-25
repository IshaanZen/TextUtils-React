import React from 'react'

function Alerts(props) {

  //Created and arrow function that will capitalize the first word of the alert type 
  const capitalize =  (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (

    //&& works as an comparison in if statement  , if alert.Prop is false then the statement afer it wont be executed
    props.alertProp && <div className= {`alert alert-${props.alertProp.type} alert-dismissible fade show`} role="alert">
            <strong>{ capitalize(props.alertProp.type) }</strong>:  {props.alertProp.msg}

            {/* this button id for cross  */}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
  )
}

export default Alerts