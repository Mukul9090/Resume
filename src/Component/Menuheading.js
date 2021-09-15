import React from 'react'

function Menuheading(props) {
    return (
        <div>
           
             <div className="container my-3">
       <div class="accordion-item"/>
       <h2 class="accordion-header" id="headingOne">
         <button class="accordion-button" type="button"  aria-expanded="true" aria-controls="collapseOne">
        <b> {props.p1}  </b>
         </button>
       </h2>
   
       </div>

        </div>
    )
}

export default Menuheading
