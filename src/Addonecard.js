import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
function AddOneCard({text,shortUrl})
{
  console.log("in addonecard")

  return(
     
    <div  class="row display">
   
<div  class= 'col-lg-4 col-md-6 mb-4'>
  <div class="card h-100">
   
    <div class="card-body">
      <h6 class ="card-title">Visit Time:</h6>
      <h5 class="card-title">
       {text}
      </h5>
      <h6 class ="card-title">Country</h6>
      <h5 class="card-title">
       qwertyy@gmail.com
      </h5>
      <h6 class ="card-title">Device Details</h6>
      <h5 class="card-title">
       {shortUrl}
      </h5>
     </div>

  </div>
</div>

</div>


)

}
export default AddOneCard
