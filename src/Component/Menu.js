import React, {useState } from 'react'


function Menu(props) {

    let count=props.state;
    
    return (
    <div>
           
        <div className="container my-3">
           
        
  

  <div class="accordion-item">
    <h2 class="accordion-header" id={'headingOne'+count}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne1" +count}aria-expanded="false" aria-controls={"collapseOne1"+count}>
     <b>  {props.fourth[0]}  </b>
      </button>
    </h2>
    <div id={"collapseOne1"+count} class="accordion-collapse collapse " aria-labelledby={"headingOne1" +count}data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {props.first.slice(1,)}
        
      </div>
    </div>
  </div>
  

</div>

        </div>
    )
}

export default Menu
