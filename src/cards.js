import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import  '../node_modules/bootstrap/dist/css/bootstrap.css'

function Cards({users})
{
    //const[users,setUsers]= React.useState([])
    const[loading,setLoading]= React.useState(true)
    var data =
    {
      email:"qwertyy@gmail.com",
      
  
    }

  // useEffect(() => {
  //   fetch('https://urlshortnerappantony.herokuapp.com/getUrls',{
  //       method: 'POST', // or 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //   })
  //         .then(res => res.json())
         
  //         .then((data) => {
           
  //           console.log(data.data)
  //            setUsers(data.data)
  //            setLoading(false)
  //       //    return renderCards(data);
           
           
  //          // setLoading(false);
  //         })
  //       },[])
        
    console.log("inside cards")
    console.log(users)
  
    return(
     
        <div  class="row display">
        {
    users.map((user,index)=>(

    <div key = {index} class= 'col-lg-4 col-md-6 mb-4'>
      <div class="card h-100">
       
        <div class="card-body">
          <h6 class ="card-title">LongURL:</h6>
          <h5 class="card-title">
           {user.longurl}
          </h5>
          <h6 class ="card-title">EMAIL</h6>
          <h5 class="card-title">
           {user.email}
          </h5>
          <h6 class ="card-title">SHORTURL</h6>
          <h5 class="card-title">
           {user.shorturl}
          </h5>
         </div>

      </div>
    </div>
    ))}
  </div>

    
    )
   
  

   
  
}

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

export default Cards;