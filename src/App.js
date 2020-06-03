import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Cards from './cards.js'
import AddOneCard from './Addonecard.js'
import { logDOM } from '@testing-library/react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 


function App() {
  
  const [text, setText] = React.useState("");
  const [shortUrl,setShorturl] = React.useState("")
  const[users,setUsers]= React.useState([])
 // const[loading,setLoading]= React.useState(true)
  var data =
  {
    email:"qwertyy@gmail.com"
  }
  useEffect(()=>{
    renderdetails({setUsers})
  },[])
  //renderdetails({setUsers})
  // useEffect(() => {
  //   console.log("inside fetch")
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
  //          // setLoading(false)
  //       //    return renderCards(data);
           
           
  //          // setLoading(false);
  //         })
  //       },[])
  return (
    
    <div className="App">
     <button> <Link to = "/Addonecard">red</Link></button>
    <div class="card-body">
    <h5 class="card-title">Enter the long url below</h5>
  <div> 
    <InputComponent value={text} onChange={(value) => setText(value)} />
  </div>
    <div class = "btn">
      <ButtonComponent shortUrl = {setShorturl} text = {text} setUsers = {setUsers}  />
      
  </div>
  <h6  class="card-title">You should login to access this service </h6>
  <h5 class="card-title">urlshortnerappantony.herokuapp.com/{shortUrl}</h5>
  </div>
  <Cards users = {users} />
  
  
  
  </div>
  
           
              
  
  );
}


const getShortUrl =(longurl,shortUrl,setUsers)=>{
  console.log("getShortUrl")
  if(longurl!=null)
  var data =
  {
    email:"qwertyy@gmail.com",
    longurl:longurl

  }
  fetch('https://urlshortnerappantony.herokuapp.com/generateurl',{
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
      .then(res => res.json())
     
      .then((data) => {
       
        console.log(data)
        shortUrl (data.url)
        renderdetails({setUsers})
      //  window.location.reload(false)
       
       // setLoading(false);
      })
}
const InputComponent = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    class = "form-control" placeholder="Enter url"
    onChange={(event) => onChange(event.target.value)}
  />
);
const ButtonComponent = ({shortUrl,text,setUsers})=>
(
  <button  class="btn btn-primary" onClick ={()=>{getShortUrl(text,shortUrl,setUsers)}}>Get url</button>
)

const renderdetails = ({setUsers})=>
{
  var data =
  {
    email:"qwertyy@gmail.com"
  }
    console.log("inside fetch")
    fetch('https://urlshortnerappantony.herokuapp.com/getUrls',{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
          .then(res => res.json())
         
          .then((data) => {
           
            console.log(data.data)
             setUsers(data.data)
           // setLoading(false)
        //    return renderCards(data);
           
           
           // setLoading(false);
          })
        
}
export default App;
