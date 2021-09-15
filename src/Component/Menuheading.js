import React from 'react'

function Menuheading(props) {
    return (
        <div>
           
             <div className="my-1">
       <div class="accordion"/>
       <h2 class="accordion" id="headingOne">
         <button class="accordion-button">
        <b> {props.p1}  </b>
         </button>
       </h2>
   
       </div>

        </div>
    )
}

export default Menuheading
