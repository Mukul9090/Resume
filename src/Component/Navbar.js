import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Mukul Chauhan </a>
        
         
              <div class="btn-group">
  <button type="button" class="btn btn-success dropdown-toggle mx-4 my-2" data-bs-toggle="dropdown" aria-expanded="false">
    Social
  </button>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item" href="https://github.com/Mukul9090" target="_blank">Github</a></li>
    <li><a class="dropdown-item" href="mailto:mailstomukulchauhan@gmail.com" target="_blank" >Email </a></li>
    <li><a class="dropdown-item" href="https://www.linkedin.com/in/mukul-c-542782b6/" target="_blank">Linked In </a></li>
    <li><a class="dropdown-item" href="#">+917018485231</a></li>
    <li><hr class="dropdown-divider"/></li>
    
  </ul>
</div>
            
          </div>
    
      </nav>
    )
}

export default Navbar
